import { put, takeLatest, all } from 'redux-saga/effects';
import { actionTypes, receiveSearch, catchSearch } from './actions';
import { fetchUsersMock } from '../../services/APIService';

export function* fetchAuthStatus(action) {
    try {
        const result = yield fetchUsersMock(action.payload);
        yield put(receiveSearch(result));
    } catch (error) {
        yield put(catchSearch(error));
    }
}

export default all([
    takeLatest(actionTypes.REQ_SEARCH, fetchAuthStatus),
]);
