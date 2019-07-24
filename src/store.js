import { createStore, compose, applyMiddleware } from 'redux';
import { createBrowserHistory } from 'history';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'connected-react-router';
import rootReducer from './sagas/rootReducer';
import rootSagas from './sagas/rootSaga';
import { SORTING_LOCALSTORAGE_KEY, ROLE_KEY } from "./constants/localStorageKeys";

export const history = createBrowserHistory();

const configureStore = (initialState) => {
    const sagaMiddleware = createSagaMiddleware();
    const routerMW = routerMiddleware(history);
    const middleWares = [
        sagaMiddleware,
        routerMW
    ];

    const store = createStore(
        rootReducer(history),
        initialState,
        compose(
            applyMiddleware(...middleWares),
            // eslint-disable-next-line no-underscore-dangle
            window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
        )
    );

    if (module.hot) {
        module.hot.accept('./sagas/rootReducer', () => {
            const nextReducer = require('./sagas/rootReducer').default; // eslint-disable-line global-require
            store.replaceReducer(nextReducer);
        });
    }

    sagaMiddleware.run(rootSagas);
    store.subscribe(() => {
        const state = store.getState();
        state.search.sorting && window.localStorage.setItem(SORTING_LOCALSTORAGE_KEY, state.search.sorting);
        state.login.role && window.localStorage.setItem(ROLE_KEY, state.login.role);
    });

    return store;
};

export default configureStore;
