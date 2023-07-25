import { FETCH_REQUEST, FETCH_SUCCESS, FETCH_FAILURE } from "./const";

export const fetchRequest = () => ({
    type: FETCH_REQUEST,
});

export const fetchSuccess = (data) => ({
    type: FETCH_SUCCESS,
    payload: data,
});

export const fetchFailure = (error) => ({
    type: FETCH_FAILURE,
    payload: error,
});