export const actionTypes = {
    REQ_SEARCH: 'REQ_SEARCH',
    RCV_SEARCH: 'RCV_SEARCH',
    ERR_SEARCH: 'ERR_SEARCH',
    SET_SORTING: 'SET_SORTING'
};

export const requestSearch = searchTherm => ({
    type: actionTypes.REQ_SEARCH,
    payload: searchTherm
});

export const receiveSearch = users => ({
    type: actionTypes.RCV_SEARCH,
    payload: users
});

export const catchSearch = error => ({
    type: actionTypes.ERR_SEARCH,
    payload: error
});

export const setSorting = sortingDirection => ({
    type: actionTypes.SET_SORTING,
    payload: sortingDirection
});
