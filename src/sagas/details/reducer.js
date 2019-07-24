import { actionTypes } from './actions';

const initialState = {
    data: {},
    isFetching: false,
    error: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.REQ_USER:
            return { ...state, isFetching: true, error: null, data: initialState.data };
        case actionTypes.RCV_USER:
            return { ...state, isFetching: false, data: action.payload, error: false };
        case actionTypes.ERR_USER:
            return { ...state, isFetching: false, data: initialState.data, error: action.payload };
        default:
            return state;
    }
};
