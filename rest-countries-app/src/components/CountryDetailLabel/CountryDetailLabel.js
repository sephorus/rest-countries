// scss imports
import "../CountryDetailLabel/CountryDetailLabel.scss"

// component imports

// react imports
import React from 'react'
import { Link } from "react-router-dom"

function CountryDetailLabel(props) {
    if (props.labelType) {
        return (
            <div className="country-near">
                <span className="label-title">
                    {
                        props.labelTitle + ": "
                    }
                </span>
                {
                    props.labelContent.map((neighbor) => {
                        return (
                            <Link
                                to={"/rest-countries/" + neighbor.name.toLowerCase()}
                                className="neighbor"
                                key={neighbor.name.toLowerCase()}
                            >
                                {
                                    neighbor.name
                                }
                            </Link>
                        )
                    })
                }
            </div>
        )
    } else {
        return (
            <p className="label-component">
                <span className="label-title">
                    {
                        props.labelTitle + ": "
                    }
                </span>
                {
                    props.labelContent
                }
            </p >
        )
    }
}

export default CountryDetailLabel