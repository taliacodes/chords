import { createStore, combineReducers, applyMiddleware } from 'redux';
import testingReducer from './testingReducer';
import testingReducer2 from './testingReducer2';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

const reducer = combineReducers({
  testingReducer,
  testingReducer2
});

const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
);

const store = createStore(reducer, middleware);

export default store;
