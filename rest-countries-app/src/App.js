// css imports 
import './App.css';

// component imports
import CountryDashboard from './components/CountryDashboard/CountryDashboard';
import CountryDetails from './components/CountryDetails/CountryDetails';
import Menu from './components/Menu/Menu';

// react imports
import React from 'react';
import { Route } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countryItems: []
    }
  }

  componentDidMount = async () => {
    const response = await fetch('https://restcountries.eu/rest/v2/all');
    const json = await response.json();
    this.setState({
      countryItems: json
    })
  }

  render() {
    return (
      <div className="App" >
        <header className="App-header">

          <Menu />

          <Route
            exact
            path="/rest-countries/:countryName"
            render={(props) => <CountryDetails {...props} countryItems={this.state.countryItems} />}
          />

          <Route
            exact
            path="/rest-countries"
            render={(props) => <CountryDashboard {...props} countryItems={this.state.countryItems} />}
          />

        </header>
      </div >
    )
  }

}

export default App;
