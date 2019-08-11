export const incrementPointsAction = (points)=>{
  console.log("increment action is firing");
  return({
    'type': 'INCREMENT',
    'payload': points
  });
}


export const decrementPointsAction = (points) =>{
  return({
    'type': 'DECREMENT',
    'payload': points
  });
}
