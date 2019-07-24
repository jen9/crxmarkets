import { all } from 'redux-saga/effects';
import logIn from './logIn/sagas';
import search from './search/sagas';
import details from './details/sagas';

export function* rootSaga() {
    yield all([
        logIn,
        search,
        details
    ]);
}

export default rootSaga;
