// scss imports
import "../CountryDetailLabel/CountryDetailLabel.scss"

// component imports

// react imports
import React from 'react'
import { Link } from "react-router-dom"
import PropTypes from 'prop-types'

function CountryDetailLabel(props) {
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
                    props.labelContent.map((neighbor) => (
                        <Link
                            to={"/rest-countries/" + neighbor.name.toLowerCase()}
                            className="neighbor"
                        >
                            {
                                neighbor.name
                            }
                        </Link>
                    ))
                )
            }
        </p>
    )
}

export default CountryDetailLabel

// expected to pass the title of the label, as well as the content
// example: Population (labelTitle): 10,000,000 (labelContent)
// CountryDetailLabel.propTypes = {
//     labelTitle: PropTypes.string.isRequired
// }