import { FETCH_REQUEST, FETCH_SUCCESS, FETCH_FAILURE } from "./const";

const initialState = {
    loading: false,
    error: null,
    products: [],
}

export default function apiReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case FETCH_SUCCESS:
            return {
                ...state,
                loading: false,
                products: action.payload,
            };
        case FETCH_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};
