const top5 = (state = [], action) => {
    switch(action.type) {
        case 'SET_TOP5':
            return action.payload;
        case 'LOGOUT':
            return [];
        default:
            return state;
    }
}

export default top5;