import React, { Component } from 'react';
import NoteBox from '../NoteBox/NoteBox';
import AddNote from '../AddNote/AddNote';
import LabelBar from '../LabelBar/LabelBar';
import Notification from '../Notification/Notification';

class NoteMain extends Component {

    render() {
        return (
            <div>
                <AddNote newNote={ this.props.newNote } 
                         actions={ this.props.actions } 
                         general={ this.props.general }
                /> 
                <NoteBox notes={ this.props.notes } 
                         general={ this.props.general } 
                         actions={ this.props.actions } 
                         labels={ this.props.labels }
                />
                <LabelBar labels={ this.props.labels }
                          actions={ this.props.actions }
                />
                <Notification general={ this.props.general } 
                              actions={ this.props.actions } 
                />
            </div>
        );
    }

}

export default NoteMain;