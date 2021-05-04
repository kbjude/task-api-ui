import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import "regenerator-runtime/runtime";

const sagaMiddleware = createSagaMiddleware();

function* exampleSaga() {
    console.log("Example saga reached");
  }
  export const store = createStore(countReducer, applyMiddleware(sagaMiddleware));