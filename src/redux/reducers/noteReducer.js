let noteReducer = function(notes = [], action) {
    switch (action.type) {
        case 'ADD_NOTE':
            return  [{
                title: action.payload.title,
                text: action.payload.text,
                label: action.payload.label,
                id: getId(notes)
            }, ...notes];
        case 'OPEN_NOTE_MENU':
            return notes.map((note) => {
                return note.id === action.payload ? 
                    Object.assign({}, note, {menuOpen: action.status}) : note;
            });
        case 'FILTER_NOTES': 
            return notes.map((note) => {
                return (note.title.toLowerCase().indexOf(action.payload.toLowerCase()) === -1 &&
                        note.text.toLowerCase().indexOf(action.payload.toLowerCase()) === -1 ) ?
                    Object.assign({}, note, {hide: true}) : Object.assign({}, note, {hide: false});
            });
        case 'FILTER_NOTES_WITH_LABEL':
            return notes.map((note) => {
                if (!action.payload) return  Object.assign({}, note, {hide: false});

                return note.label !== action.payload ?
                    Object.assign({}, note, {hide: true}) : Object.assign({}, note, {hide: false});
            });
        case 'CHOOSE_COLOR':
            return notes.map((note) => {
                return note.id === action.id ? 
                    Object.assign({}, note, {bgColor: action.color}) : note;
            });
        case 'CHOOSE_LABEL':
            return notes.map((note) => {
                return note.id === action.id ? 
                    Object.assign({}, note, {label: action.label}) : note;
            });
        case 'OPEN_CHOOSE_COLOR':
            return notes.map((note) => {
                return note.id === action.payload ? 
                    Object.assign({}, note, {chooseColorOpen: action.status}) : note;
            });
        case 'OPEN_CHOOSE_LABEL':
            return notes.map((note) => {
                return note.id === action.payload ? 
                    Object.assign({}, note, {chooseLabelOpen: action.status}) : note;
            });
        case 'CHECK_NOTE':
            return notes.map((note) => {
                return note.id === action.payload ? 
                    Object.assign({}, note, {checked: !note.checked}) : note;
            });
        case 'CHANGE_TITLE':
            return notes.map((note) => {
                return note.id === action.id ? 
                    Object.assign({}, note, {title: action.title}) : note;
            });
        case 'CHANGE_TEXT':
            return notes.map((note) => {
                return note.id === action.id ? 
                    Object.assign({}, note, {text: action.text}) : note;
            });
        case 'OPEN_NOTE':
            return notes.map((note) => {
                return note.id === action.id ? 
                    Object.assign({}, note, {opened: !note.opened}) : note;
            });
        case 'DELETE_NOTE':
            return notes.filter((note) => {
                return note.id !== action.id
            });
        case 'LOAD_NOTES':
            return action.payload;
        default: 
            return notes;
    }
};

function getId(notes) {
    return notes.reduce((maxId, note) => {
        return Math.max(note.id, maxId)
    }, -1) + 1;
}

export default noteReducer;