import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import axios from 'axios';
import rootReducer from './Reducers/index';
import rootSaga from './middleware';

export default function configureStore(initialState) {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(
      applyMiddleware(reduxImmutableStateInvariant(), sagaMiddleware),
    ),
  );

  const token = localStorage.getItem('token');
  if (token != null) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  }
  sagaMiddleware.run(rootSaga);
  return store;
}
