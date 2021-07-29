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
            <ul className="countryItems">
                {
                    this.state.countryItems.map((country) => (
                        <CountryCard
                            key={country.numericCode}
                            countryInfo={country}
                        />
                    ))
                }
            </ul>
        )
    }
}

export default CountryDashboard;