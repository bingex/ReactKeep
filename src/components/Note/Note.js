import React, { Component } from 'react';
import classNames from 'classnames';
import ColorMenu from '../ColorMenu/ColorMenu';
import NoteMenu from '../NoteMenu/NoteMenu';
import LabelMenu from '../LabelMenu/LabelMenu';
import './Note.css';

class Note extends Component {

    handleCheck() {
        this.props.actions.checkNote(this.props.note.id);
    }

    handleNoteClick(e) {
        if (e.target.classList.contains('note__check-btn') ||
            e.target.classList.contains('note__color-wheel') ||
            e.target.classList.contains('note__label') ||
            e.target.classList.contains('clr') ||
            e.target.classList.contains('lbl') ||
            e.target.classList.contains('note__menu')) return;

        if (e.currentTarget.classList.contains('note-opened')) return;

        this.props.actions.openNote(this.props.note.id);
        this.props.actions.showGrayBg(this.props.note.id);
    }

    handleTitleChange(e) {
        this.props.actions.changeTitle(this.props.note.id, e.target.value);
    }

    handleTextChange(e) {
        this.props.actions.changeText(this.props.note.id, e.target.value);
    }

    render() {
        var noteClass = classNames({
            'note': true,
            'note-checked': this.props.note.checked,
            'note-opened': this.props.note.opened
        });

        var noteCheckClass = classNames({
            'note__check-btn': true,
            'note-btn-checked': this.props.note.checked
        });

        var divStyle = {
            background: this.props.note.bgColor
        };

        return (
            <div className={ noteClass } 
                 style={ divStyle } 
                 onClick={ this.handleNoteClick.bind(this) }>
                 
                <div className={ noteCheckClass } 
                     onClick={ this.handleCheck.bind(this) }>
                </div>
                
                <input className="note__title" 
                       value={ this.props.note.title } 
                       onChange={ this.handleTitleChange.bind(this) }
                />

                <input className="note__text" 
                       value={ this.props.note.text } 
                       onChange={ this.handleTextChange.bind(this) }
                />

                <ColorMenu actions={ this.props.actions } 
                           note={ this.props.note } 
                />

                <NoteMenu actions={ this.props.actions } 
                          note={ this.props.note } 
                          general={ this.props.general } 
                />

                <LabelMenu actions={ this.props.actions } 
                           note={ this.props.note } 
                           general={ this.props.general } 
                           labels={ this.props.labels } 
                />
            </div>
        );
    }

}

export default Note;