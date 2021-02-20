import {
    FETCH_DREAMS_REQUEST,
    FETCH_DREAMS_REGECTE,
    FETCH_DREAMS_SUCCESS,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    REGISTER_SUCCESS,
    LOGIN_REJECT,
    REGISTER_REQUEST,
    REGISTER_REJECT,
    LOGOUT 
}
    from '../constans/actionTypes';

const reducer = (state, action) => {

    switch (action.type) {
        case FETCH_DREAMS_REQUEST:
            return { ...state, loading: true };
        case FETCH_DREAMS_SUCCESS:
            return { ...state, dreams: action.dreams, loadng: false }

        case FETCH_DREAMS_REGECTE:
            return { ...state, loading: false }
        case LOGIN_REQUEST:
            return { ...state, loading: true }
        case LOGIN_SUCCESS:
        case REGISTER_SUCCESS:
            return { ...state, user: action.user, token: localStorage.getItem('user') }
        case LOGIN_REJECT:
            return { ...state, loading: false, error: action.error }

        case REGISTER_REQUEST:
            return { ...state, loading: true }
        case REGISTER_REJECT:
            return { ...state, loading: false, error: action.error }
        case LOGOUT:
            return { ...state, user: null, token: null }
        default:
            return state
    }

}

export default reducer;