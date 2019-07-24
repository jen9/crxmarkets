import { put, takeLatest, all } from 'redux-saga/effects';
import { actionTypes, receiveLogin, catchLogin } from './actions';
import {authorize} from "../../services/APIService";

export function* fetchAuthStatus(action) {
    try {
        const result = yield authorize(action.payload);
        yield put(receiveLogin(result));
    } catch (error) {
        yield put(catchLogin(error));
    }
}

export default all([
    takeLatest(actionTypes.REQ_LOGIN, fetchAuthStatus),
]);
