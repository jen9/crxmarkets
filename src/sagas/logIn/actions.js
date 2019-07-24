export const actionTypes = {
    REQ_LOGIN: 'REQ_LOGIN',
    RCV_LOGIN: 'RCV_LOGIN',
    ERR_LOGIN: 'ERR_LOGIN'
};

export const requestLogin = data => ({
    type: actionTypes.REQ_LOGIN,
    payload: data
});

export const receiveLogin = status => ({
    type: actionTypes.RCV_LOGIN,
    payload: status
});

export const catchLogin = error => ({
    type: actionTypes.ERR_LOGIN,
    payload: error
});
