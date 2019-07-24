import { actionTypes } from './actions';

const initialState = {
    isFetching: false,
    error: null,
    role: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.REQ_LOGIN:
            return { isFetching: true, error: null, role: null };
        case actionTypes.RCV_LOGIN:
            return { error: null, isFetching: false, role: action.payload };
        case actionTypes.ERR_LOGIN:
            return { isFetching: false, role: null, error: action.payload };
        default:
            return state;
    }
};
