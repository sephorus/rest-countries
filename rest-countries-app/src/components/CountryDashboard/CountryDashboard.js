import React from 'react';
import CountryCard from '../CountryCard/CountryCard';
import './CountryDashboard.scss';

function CountryDashboard(props) {
    const { countryItems } = props;

    return (
        <div className="countryDashboard">
            <div className="countryItems">
                {
                    countryItems.map((country) => (
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

export default CountryDashboard;