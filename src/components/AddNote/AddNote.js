import React, { Component } from 'react';
import classNames from 'classnames';
import ClickOutHandler from 'react-onclickout';
import './AddNote.css';

class AddNote extends Component {

    handleTitleChange(e) {
        this.props.actions.changeNewNote(e.target.value, this.props.newNote.text);
    }

    handleTextChange(e) {
        this.props.actions.changeNewNote(this.props.newNote.title, e.target.value);
    }

    handleSubmit(e) {
        e.preventDefault();

        if (!this.props.newNote.title.trim() || !this.props.newNote.text.trim()) return;

        this.props.actions.addNotification(this.props.newNote.title + ' was added.');

        this.props.newNote.label = (this.props.general.filterLabel) ? (this.props.general.filterLabel) : 'default';

        this.props.actions.addNote(this.props.newNote);
        this.props.actions.changeNewNote('','');
    }

    handleFocus() {
        this.props.actions.focusNewNote(true);
    }

    onClickOut() {
        if (!this.props.newNote.onFocus) return;

        this.props.actions.focusNewNote(false);
    }

    render() {
        var inputTitleClass = classNames({
            'add-note__title': true,
            'open': this.props.newNote.onFocus
        });

        var inputSubmitClass = classNames({
            'add-note__submit': true,
            'open': this.props.newNote.onFocus
        });

        return (
            <ClickOutHandler onClickOut={ this.onClickOut.bind(this) }>
                <form className="add-note" onSubmit={ this.handleSubmit.bind(this) }>
                    <input className={ inputTitleClass }
                           type="text" 
                           placeholder="Title" 
                           value={ this.props.newNote.title }
                           onChange={ this.handleTitleChange.bind(this) }
                    />
                    <input className="add-note__text" 
                           type="text" 
                           placeholder="Input text ..." 
                           value={ this.props.newNote.text }
                           onChange={ this.handleTextChange.bind(this) }
                           onFocus={ this.handleFocus.bind(this) }
                    />
                    <input className={ inputSubmitClass } 
                           type="submit" 
                           value="Submit" 
                    />
                </form>
            </ClickOutHandler>
        );
    }
}

export default AddNote;