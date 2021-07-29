import React from 'react';
import "./CountryCard.scss";

function CountryCard(props) {
    let { countryName, countryFlagURL, countryPopulation, countryRegion, countryCapital } = props;

    if (!countryName) {
        countryName = "Not known";
    }

    if (!countryFlagURL) {
        countryFlagURL = "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png";
    }

    if (!countryPopulation || countryPopulation == 0) {
        countryPopulation = "Not know";
    }

    if (!countryRegion) {
        countryRegion = "Not known";
    }

    if (!countryCapital) {
        countryCapital = "Not known";
    }

    return (
        <div className="countryCard">
            <img loading="lazy" src={countryFlagURL} alt={`The country flag for ${countryName}`} />

            <div className="countryCard__info">
                <h2>
                    {countryName}
                </h2>
                <div className="countryCard__stats">
                    <p className="countryCard__stat">
                        <span className="countryCard__statTitle">Population: </span>
                        {countryPopulation}
                    </p>
                    <p className="countryCard__stat">
                        <span className="countryCard__statTitle">Region: </span>
                        {countryRegion}
                    </p>
                    <p className="countryCard__stat">
                        <span className="countryCard__statTitle">Capital: </span>
                        {countryCapital}
                    </p>
                </div>
            </div>

        </div>
    )
}

export default CountryCard;