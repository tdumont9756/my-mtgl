/*
  issue is the way that Points is being passed to the points reducer.  Investigate
  here!
*/


// the action should be passing the correct payload.
//points reducer should just be updating the state.
export default function pointReducer(state = {points:0}, action){

  switch(action.type){
    case 'INCREMENT' :
      let tmp = Object.assign({},state, {points: action.payload});
      console.log(tmp);
      return   Object.assign({},state, {points: action.payload});
    case 'DECREMENT':
      return   Object.assign({},state, {points: action.payload});
    default:
      return state;
  }
}
