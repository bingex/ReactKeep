import axios from 'axios';

let actions = {
    addNote: function(newNote) {
        return {
            type: 'ADD_NOTE',
            payload: newNote
        };
    },

    setCurrentLabelFilter: function(label) {
        return {
            type: 'SET_CURRENT_LABEL_FILTER',
            payload: label
        };
    },

    addLabel: function() {
        return {
            type: 'ADD_LABEL'
        };
    },

    addNotification: function(title) {
        return {
            type: 'ADD_NOTIFICATION',
            payload: title
        };
    },

    changeSearch: function(search) {
        return {
            type: 'CHANGE_SEARCH',
            payload: search
        };
    },

    filterNotes: function(text) {
        return {
            type: 'FILTER_NOTES',
            payload: text
        }
    },

    filterNotesWithLabel: function(label) {
        return {
            type: 'FILTER_NOTES_WITH_LABEL',
            payload: label
        }
    },

    openNoteMenu: function(id, status) {
        return {
            type: 'OPEN_NOTE_MENU',
            payload: id,
            status: status
        };
    },

    openChooseColor: function(id, status) {
        return {
            type: 'OPEN_CHOOSE_COLOR',
            payload: id,
            status: status
        };
    },

    openChooseLabel: function(id, status) {
        return {
            type: 'OPEN_CHOOSE_LABEL',
            payload: id,
            status: status
        };
    },

    chooseColor: function(id, color) {
        return {
            type: 'CHOOSE_COLOR',
            id: id,
            color: color
        };
    },

    chooseLabel: function(id, label) {
        return {
            type: 'CHOOSE_LABEL',
            id: id,
            label: label
        };
    },

    openNote: function(id) {
        return {
            type: 'OPEN_NOTE',
            id: id
        };
    },

    showGrayBg: function(id) {
        return {
            type: 'SHOW_GRAY_BG',
            payload: id
        };
    },

    checkNote: function(id) {
        return {
            type: 'CHECK_NOTE',
            payload: id
        };
    },

    changeTitle: function(id, title) {
        return {
            type: 'CHANGE_TITLE',
            id: id,
            title: title
        };
    },

    changeText: function(id, text) {
        return {
            type: 'CHANGE_TEXT',
            id: id,
            text: text
        };
    },

    labelChange: function(id, text) {
        return {
            type: 'LABEL_CHANGE',
            id: id,
            text: text
        }
    },

    deleteNote: function(id) {
        return {
            type: 'DELETE_NOTE',
            id: id
        };
    },

    loadNotes: function (notes) {
        return {
            type: 'LOAD_NOTES',
            payload: notes
        };
    },

    loadLabels: function (labels) {
        return {
            type: 'LOAD_LABELS',
            payload: labels
        };
    },

    changeNewNote: function(title, text) {
        return {
            type: 'CHANGE_NEW_NOTE',
            title: title,
            text: text
        };
    },

    focusNewNote: function(status) {
        return {
            type: 'FOCUS_NEW_NOTE',
            payload: status
        };
    },


    requestLoadNotes: function() {
        return (dispatch) => {
            axios.get('notes.json')
            .then(function (response) {
                if (!response.error) {
                    dispatch(actions.loadNotes(response.data));
                }
            });
        };
    },

     requestLoadLabels: function() {
        return (dispatch) => {
            axios.get('labels.json')
            .then(function (response) {
                if (!response.error) {
                    dispatch(actions.loadLabels(response.data));
                }
            });
        };
    },
}

export default actions;