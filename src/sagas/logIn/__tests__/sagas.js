import { fetchAuthStatus } from '../sagas';
import { put } from 'redux-saga/effects';
import { authorize } from "../../../services/APIService";
import { receiveLogin } from '../actions';

jest.mock('../../../services/APIService');
const authorizeValue = 10;
authorize.mockReturnValue(authorizeValue);

const saga = fetchAuthStatus({payload: 313});

it("saga", () => {
    const sagaValue = saga.next().value;
    expect(sagaValue).toEqual(authorizeValue);
    expect(saga.next(sagaValue).value).toEqual(put(receiveLogin(sagaValue)));
});
