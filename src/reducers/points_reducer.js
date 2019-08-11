export default function pointReducer(points = 0, action){
  switch(action.type){
    case 'INCREMENT' :
      console.log("increment reducer is firing and points is "+ points);
      return  points++;
    case 'DECREMENT':
      return points--;
    default:
      return points;
  }
}
