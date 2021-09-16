// css imports 
import './App.css';

// component imports
import CountryDashboard from './components/CountryDashboard/CountryDashboard';
import CountryDetails from './components/CountryDetails/CountryDetails';
import Menu from './components/Menu/Menu';
import SearchBar from './components/SearchBar/SearchBar';

// react imports
import React from 'react';
import { Route } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countryItems: [],
      searchValue: ''
    }
  }

  onSearchChange = (searchValue) => {
    this.setState({
      searchValue: searchValue.trim()
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

    const showingCountryItems = this.state.searchValue === ''
      ? this.state.countryItems
      : this.state.countryItems.filter((c) => (
        c.name.toLowerCase().includes(this.state.searchValue.toLowerCase())
      ))

    return (
      <div className="App" >
        <header className="App-header">

          <Menu />

          <SearchBar value={this.state.searchValue} onSearchChange={this.onSearchChange} />

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
