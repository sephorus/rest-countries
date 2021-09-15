// scss imports
import "../CountryDetails/CountryDetails.scss"

// component imports
import CountryDetailLabel from "../CountryDetailLabel/CountryDetailLabel"

// react imports
import React from 'react'
import { Link } from 'react-router-dom'

function CountryDetails(props) {
    const country = props.countryItems.filter(country => {
        return country.name.toLowerCase() === props.match.params.countryName
    })[0]

    let neighbors = []
    country.borders.map(neighbor => neighbors.push(props.countryItems.filter(nearCountry => nearCountry.alpha3Code === neighbor)[0]))

    let countryLanguages = ""
    country.languages.forEach(element => {
        countryLanguages += element.name + ", "
    });
    countryLanguages = countryLanguages.substring(0, countryLanguages.length - 2);

    let countryCurrencies = ""
    country.currencies.forEach(element => {
        countryCurrencies += element.name + ", "
    });
    countryCurrencies = countryCurrencies.substring(0, countryCurrencies.length - 2);

    return (
        <div className="country-details-wrapper">
            <Link
                to="/rest-countries"
            >
                {"Back"}
            </Link>
            <div className="country-container">
                <img src={country.flag} alt={`The flag of ${country.name}`} />
                <section className="country-info">
                    <h3 className="country-name">{country.name}</h3>
                    <div className="country-details">
                        <div className="country-details-column">
                            <CountryDetailLabel labelTitle="Native Name" labelContent={country.nativeName} />
                            <CountryDetailLabel labelTitle="Population" labelContent={country.population} />
                            <CountryDetailLabel labelTitle="Region" labelContent={country.region} />
                            <CountryDetailLabel labelTitle="Sub Region" labelContent={country.subregion} />
                            <CountryDetailLabel labelTitle="Capital" labelContent={country.capital} />
                        </div>
                        <div className="country-details-column">
                            <CountryDetailLabel labelTitle="Top Level Domain" labelContent={country.topLevelDomain[0]} />
                            <CountryDetailLabel labelTitle="Currencies" labelContent={countryCurrencies} />
                            <CountryDetailLabel labelTitle="Languages" labelContent={countryLanguages} />
                        </div>
                    </div>
                    {
                        neighbors.length != 0 && (
                            <div className="country-near">
                                <CountryDetailLabel labelTitle="Border Countries" labelContent={neighbors} />
                            </div>
                        )
                    }
                </section>
            </div>
        </div>
    )
}

export default CountryDetails