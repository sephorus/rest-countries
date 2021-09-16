import React from 'react'

function SearchBar(props) {
    const { value, onSearchChange } = props
    return (
        <form>
            <input
                type="text"
                id="search"
                name="search"
                value={value}
                onChange={(event) => onSearchChange(event.target.value)}
            />
        </form>
    )
}

export default SearchBar