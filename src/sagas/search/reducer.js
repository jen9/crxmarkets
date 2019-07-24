import { actionTypes } from './actions';
import applySorting from "../../utils/sort";

const initialState = {
    data: [],
    isFetching: false,
    error: null,
    sorting: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.REQ_SEARCH:
            return { ...state, isFetching: true, error: null, data: initialState.data };
        case actionTypes.RCV_SEARCH:
            return { ...state, isFetching: false, data: [...applySorting(action.payload, state.sorting)], error: false };
        case actionTypes.ERR_SEARCH:
            return { ...state, isFetching: false, data: initialState.data, error: action.payload };
        case actionTypes.SET_SORTING:
            return { ...state, data: [...applySorting(state.data, action.payload)], sorting: action.payload};
        default:
            return state;
    }
};
