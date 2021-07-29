import React from 'react';
import CountryCard from '../CountryCard/CountryCard';
import './CountryDashboard.scss';

class CountryDashboard extends React.Component {
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
            <div className="countryDashboard">
                <div className="countryItems">
                    {
                        this.state.countryItems.map((country) => (
                            <CountryCard
                                key={country.numericCode}
                                countryName={country.name}
                                countryFlagURL={country.flag}
                                countryPopulation={country.population}
                                countryRegion={country.region}
                                countryCapital={country.capital}
                            />
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default CountryDashboard;