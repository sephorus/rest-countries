// scss imports
import "../CountryDetails/CountryDetails.scss"

// component imports
import CountryDetailLabel from "../CountryDetailLabel/CountryDetailLabel"
import backButton from '../../images/back-arrow.svg';

// react imports
import React from 'react'
import { Link } from 'react-router-dom'

class CountryDetails extends React.Component {
    constructor(props) {
        super(props)

        // initial default state
        this.state = {
            country: {},
            neighbors: []
        }
    }

    // will run this asynchronous function upon mounting
    componentDidMount = async () => {
        // returns an array of countries with a matching name
        const response = await fetch(`https://restcountries.eu/rest/v2/name/${this.props.match.params.countryName}?fullText=true`);
        let json = await response.json();
        json = json[0]

        const neighborList = json.borders

        // trying to get the country objects given the bordering countries alpha3 codes
        const neighborItems = []
        neighborList.map(async (neighbor) => {
            const response = await fetch(`https://restcountries.eu/rest/v2/alpha/${neighbor}`)
            const json = await response.json()
            neighborItems.push(json)
        })

        // update the state with the target country and its neighboring country objects
        this.setState({
            country: json,
            neighbors: neighborItems
        })

    }

    render() {
        let countryLanguages = ''
        let countryCurrencies = ''
        let topLevelDomain = ''

        // once the country object has been loaded in, create the strings for the CountryDetailLabel component
        if (Object.keys(this.state.country).length !== 0) {
            this.state.country.languages.forEach(element => {
                countryLanguages += element.name + ", "
            });
            countryLanguages = countryLanguages.substring(0, countryLanguages.length - 2);
            this.state.country.currencies.forEach(element => {
                countryCurrencies += element.name + ", "
            });
            countryCurrencies = countryCurrencies.substring(0, countryCurrencies.length - 2);

            topLevelDomain = this.state.country.topLevelDomain[0]
        }

        return (
            <div className="country-details-wrapper">
                <Link
                    to="/rest-countries"
                    className="back-button"
                >
                    <img src={backButton} alt="back to country dashboard" />
                    Back
                </Link>
                <div className="country-container">
                    <img src={this.state.country.flag} alt={`The flag of ${this.state.country.name}`} />
                    <section className="country-info">
                        <h3 className="country-name">{this.state.country.name}</h3>
                        <div className="country-details">
                            <div className="country-details-column">
                                <CountryDetailLabel labelTitle="Native Name" labelContent={"" + this.state.country.nativeName} />
                                <CountryDetailLabel labelTitle="Population" labelContent={"" + this.state.country.population} />
                                <CountryDetailLabel labelTitle="Region" labelContent={"" + this.state.country.region} />
                                <CountryDetailLabel labelTitle="Sub Region" labelContent={"" + this.state.country.subregion} />
                                <CountryDetailLabel labelTitle="Capital" labelContent={"" + this.state.country.capital} />
                            </div>
                            <div className="country-details-column">
                                <CountryDetailLabel labelTitle="Top Level Domain" labelContent={topLevelDomain} />
                                <CountryDetailLabel labelTitle="Currencies" labelContent={countryCurrencies} />
                                <CountryDetailLabel labelTitle="Languages" labelContent={countryLanguages} />
                            </div>
                        </div>

                        {
                            // conditionally render the bordering countries since some do not have any
                            this.state.neighbors.length !== 0 && (
                                <div className="country-near">
                                    <CountryDetailLabel labelTitle="Border Countries" labelContent={this.state.neighbors} />
                                </div>
                            )
                        }
                    </section>
                </div>
            </div>
        )
    }
}

export default CountryDetails