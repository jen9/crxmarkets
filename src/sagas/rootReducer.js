import { combineReducers } from 'redux';
import login from './logIn/reducer';
import search from './search/reducer';
import details from './details/reducer';
import { connectRouter } from 'connected-react-router'

export default (history) => combineReducers({
    router: connectRouter(history),
    login,
    search,
    details
});
