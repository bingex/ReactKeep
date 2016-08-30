let generalReducer = function(general = {}, action) {
    switch (action.type) {
        case 'SHOW_GRAY_BG':
            return Object.assign({}, general, {showModalBg: !general.showModalBg, id: action.payload});
        case 'ADD_NOTIFICATION':
            return Object.assign({}, general, {notification: action.payload});
        case 'CHANGE_SEARCH': 
            return Object.assign({}, general, {search: action.payload});
        case 'SET_CURRENT_LABEL_FILTER':
            return Object.assign({}, general, {filterLabel: action.payload});
        default: 
            return general;
    }
};

export default generalReducer;