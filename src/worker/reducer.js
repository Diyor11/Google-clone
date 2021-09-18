export const initialState = {
    term: ''
}

export const ActionTypes = {
    SET_SEARCH_TERMS: 'SET_SEARCH_TERMS'
};

const reducer = (state, action ) => {
    switch (action.type) {
        case 'SET_SEARCH_TERMS':
           return{
               ...state,
               term: action.term
           }
        default:
            return state
    }
}

export default reducer;