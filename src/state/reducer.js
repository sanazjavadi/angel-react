import {
    FETCH_DREAMS_REQUEST,
    FETCH_DREAMS_REGECTE,
    FETCH_DREAMS_SUCCESS
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
        default:
            return state
    }

}

export default reducer;