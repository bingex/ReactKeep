import React, { Component } from 'react';
import Note from '../Note/Note';
import classNames from 'classnames';
import './NoteBox.css';

class NoteBox extends Component {

    componentDidMount() {
        this.props.actions.requestLoadNotes();
    }

    handleWrapperClick() {
        this.props.actions.openNote(this.props.general.id);
        this.props.actions.showGrayBg();
    }

    render() {
        var wrapperClass = classNames({
            'note-box__wrapper': true,
            'open': this.props.general.showModalBg
        });

        var notes = this.props.notes.map((note) => {
            if (note.hide) return false;

            return (
                <Note note={ note } 
                      key={ note.id } 
                      actions={ this.props.actions } 
                      labels={ this.props.labels }
                      general={ this.props.general }
                />
            );
        });

        return (
            <div>
                <div className={ wrapperClass } onClick={ this.handleWrapperClick.bind(this) }>
                </div>
                <div className="note-box">
                    <div className="note-box__edit">
                        <div className="note-box__archive"></div>
                    </div>
                    { notes }
                </div>
            </div>
        );
    }

}

export default NoteBox;