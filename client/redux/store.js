import { createStore, applyMiddleware, combineReducers } from 'redux';
import pokemon from './pokemon';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

const middleware = applyMiddleware(thunkMiddleware,createLogger({collapsed: true}))
const reducer = combineReducers({pokemon})

const store = createStore(reducer, middleware)



export default store;
