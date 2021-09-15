// scss imports
import "../CountryDetailLabel/CountryDetailLabel.scss"

// component imports

// react imports
import React from 'react'
import { Link } from "react-router-dom"

function CountryDetailLabel(props) {
    console.log(props)
    return (
        <p className="label-component">
            <span className="label-title">
                {
                    props.labelTitle + ": "
                }
            </span>
            {
                (typeof (props.labelContent) === "string" || typeof (props.labelContent) === "number") && (
                    props.labelContent
                )
            }
            {
                (typeof (props.labelContent) != "string" && typeof (props.labelContent) != "number") && (
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
                )
            }
        </p >
    )
}

export default CountryDetailLabel