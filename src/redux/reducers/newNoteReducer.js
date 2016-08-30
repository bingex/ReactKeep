let newNoteReducer = function(newNote = {}, action) {
    switch (action.type) {
        case 'CHANGE_NEW_NOTE':
            return  Object.assign({}, newNote, {title: action.title, text: action.text});
        case 'FOCUS_NEW_NOTE':
            return  Object.assign({}, newNote, {onFocus: action.payload});
        default: 
            return newNote;
    }
};


export default newNoteReducer;