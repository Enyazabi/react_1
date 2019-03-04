const initialState = {
    user: 'unknown user'
}

export default function userInfo (state = initialState, action) {
    switch (action.type) {
        case 'USER_FIRST_ACTION':
            return {...state, user: action.payload}
        default:
            return state
    }
}