export const actionTypes = {
    REQ_USER: 'REQ_USER',
    RCV_USER: 'RCV_USER',
    ERR_USER: 'ERR_USER',
    SAVE_USER: 'SAVE_USER'
};

export const requestUser = id => ({
    type: actionTypes.REQ_USER,
    payload: id
});

export const receiveUser = users => ({
    type: actionTypes.RCV_USER,
    payload: users
});

export const catchUser = error => ({
    type: actionTypes.ERR_USER,
    payload: error
});

export const saveUser = data => ({
    type: actionTypes.ERR_USER,
    payload: data
});
