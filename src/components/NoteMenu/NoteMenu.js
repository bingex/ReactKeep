import React, { Component } from 'react';
import classNames from 'classnames';
import ClickOutHandler from 'react-onclickout';
import './NoteMenu.css';

class NoteMenu extends Component {

    onClickOut(e) {
        if (!this.props.note.menuOpen) return;
        this.props.actions.openNoteMenu(this.props.note.id, false);
    }

    handleMenuOpen() {
        this.props.actions.openNoteMenu(this.props.note.id, true);
    }

    handleNoteDelete() {
        this.props.actions.deleteNote(this.props.note.id);
        this.props.actions.addNotification(this.props.note.title + ' was removed.');
        this.props.actions.showGrayBg(this.props.note.id);
    }

    render() {
        var menuClass = classNames({
            'note__menu-list': true,
            'open': this.props.note.menuOpen
        });

        return (
            <ClickOutHandler onClickOut={ this.onClickOut.bind(this) }>
                <div className="note__menu" onClick={ this.handleMenuOpen.bind(this) }></div>
        
                <ul className={ menuClass }>
                    <li className="note__menu-item" onClick={ this.handleNoteDelete.bind(this) }>Remove</li>
                </ul>
            </ClickOutHandler>
        );
    }
}

export default NoteMenu;