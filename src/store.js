import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import combineReducers from './reducers/rootreducers';

// testing default state as we will be importing this state from api later
//let defaultState = {points: 0};


export default function configureStore() {
 return createStore(
  combineReducers,
  //defaultState,
   applyMiddleware(thunk)
 );
}
