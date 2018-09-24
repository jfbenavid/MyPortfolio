function data(state, action){
    switch (action.type){
        case 'CHANGE_LANGUAGE_TO_ENGLISH':
            return state
            
        case 'CHANGE_LANGUAGE_TO_SPANISH':
            return state

        default:
            return state
    }
}

export default data