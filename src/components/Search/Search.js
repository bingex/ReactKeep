import React, { Component } from 'react';
import './Search.css';

class Search extends Component {

    handleSearchChange(e) {
        this.props.actions.changeSearch(e.target.value);
        this.props.actions.filterNotes(e.target.value);
    }

    render() {
        return (
            <input type="text"
                   className="header__search" 
                   placeholder="Search for notes..."
                   onChange={ this.handleSearchChange.bind(this) }
                   value={ this.props.general.search } 
            />
        );
    }
}

export default Search;