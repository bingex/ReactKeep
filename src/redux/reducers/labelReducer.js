let labelReducer = function(labels = [], action) {
    switch (action.type) {
        case 'ADD_LABEL':
            return  [{
                name: '',
                id: getId(labels)
            }, ...labels];
        case 'LOAD_LABELS':
            return action.payload;
        case 'LABEL_CHANGE':
            return labels.map((label) => {
                return label.id === action.id ? 
                    Object.assign({}, label, {name: action.text}) : label;
            });
        default: 
            return labels;
    }
};

function getId(labels) {
    return labels.reduce((maxId, label) => {
        return Math.max(label.id, maxId)
    }, -1) + 1;
}

export default labelReducer;