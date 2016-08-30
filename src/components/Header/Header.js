import React, { Component } from 'react';
import Search from '../Search/Search';
import { Link } from 'react-router';
import './Header.css';

class Header extends Component {

    handleLinkNote() {
        this.props.actions.setCurrentLabelFilter(undefined);
        document.body.style.backgroundColor = '#e8e8e8';
        this.props.actions.filterNotesWithLabel();
    }

    render() {
        return (
            <div className="header">
                <Link to="/note" className="header__logo" onClick={ this.handleLinkNote.bind(this) }>React Keep</Link>
                <Search actions={ this.props.actions } general={ this.props.general } />
                <Link to="/label" className="header__nav-label" onClick={ this.handleLinkNote.bind(this) }>Labels</Link>
            </div>
        );
    }
} 

export default Header;