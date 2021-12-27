import { createStore, applyMiddleware, combineReducers } from 'redux';
import pokemon from './pokemon';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

const logger = createLogger({collapsed: true})
const middleware = applyMiddleware(thunkMiddleware, logger)
const reducer = combineReducers({pokemon})

const store = createStore(reducer, middleware)



export default store;
