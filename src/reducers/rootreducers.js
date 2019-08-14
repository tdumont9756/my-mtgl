import { combineReducers } from 'redux';
import pointReducer from './points_reducer';


export default combineReducers({
 pointsReducerKey: pointReducer
});
