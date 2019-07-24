import { put, takeLatest, all } from 'redux-saga/effects';
import { actionTypes, receiveUser, catchUser } from './actions';
import { fetchUserMock } from '../../services/APIService';

export function* fetchUser(action) {
    try {
        const result = yield fetchUserMock(action.payload);
        yield put(receiveUser(result));
    } catch (error) {
        yield put(catchUser(error));
    }
}

export default all([
    takeLatest(actionTypes.REQ_USER, fetchUser),
]);
