// css imports 
import './App.css';

// component imports
import CountryDashboard from './components/CountryDashboard/CountryDashboard';
import CountryDetails from './components/CountryDetails/CountryDetails';
import Menu from './components/Menu/Menu';
import SearchBar from './components/SearchBar/SearchBar';
import Filters from './components/Filters/Filters';

// react imports
import React from 'react';
import { Route } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countryItems: [],
      searchValue: '',
      region: ''
    }
  }

  onSearchChange = (searchValue) => {
    this.setState({
      searchValue: searchValue.trim()
    })
  }

  onRegionChange = (region) => {
    this.setState({
      region: region
    })
  }

  componentDidMount = async () => {
    const response = await fetch('https://restcountries.eu/rest/v2/all');
    const json = await response.json();
    this.setState({
      countryItems: json
    })
  }

  render() {

    let showingCountryItems = this.state.searchValue === ''
      ? this.state.countryItems
      : this.state.countryItems.filter((c) => (
        c.name.toLowerCase().includes(this.state.searchValue.toLowerCase())
      ))

    showingCountryItems = this.state.region === ''
      ? showingCountryItems
      : showingCountryItems.filter((c) => (
        c.region === this.state.region
      ))

    return (
      <div className="App" >
        <header className="App-header">

          <Menu />

          <Route
            exact
            path="/rest-countries"
            render={() => <><div className="filters">
              <SearchBar value={this.state.searchValue} onSearchChange={this.onSearchChange} />
              <Filters onRegionChange={this.onRegionChange} />
            </div></>}
          />

          <Route
            exact
            path="/rest-countries/:countryName"
            render={(props) => <CountryDetails {...props} />}
          />

          <Route
            exact
            path="/rest-countries"
            render={(props) => <CountryDashboard {...props} countryItems={showingCountryItems} />}
          />

        </header>
      </div >
    )
  }

}

export default App;
