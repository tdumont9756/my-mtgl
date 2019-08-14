export const incrementPointsAction = (points)=>{
  console.log("at the action level, points are currently: " + points);
  return({
    type: 'INCREMENT',
    payload: points + 1
  });
}


export const decrementPointsAction = (points) =>{
  return({
    type: 'DECREMENT',
    payload: points - 1
  });
}
