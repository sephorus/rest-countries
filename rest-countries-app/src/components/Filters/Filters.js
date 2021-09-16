import React from 'react'
import "../Filters/Filters.scss";

function Filters(props) {
    const { onRegionChange } = props;

    return (
        <select name="regions" id="regions" onChange={(event) => onRegionChange(event.target.value)}>
            <option value="" selected></option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
        </select>
    )
}

export default Filters