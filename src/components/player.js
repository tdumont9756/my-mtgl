import React from 'react';


export default function player(props){

  const handleIncrementClick = (e) => {
    e.preventDefault();
    console.log("handleClick is running and the points are " + props.points);
    console.log(props);
    props.incrementer(props.points);
  }

  const handleDecrementClick = (e) => {
    e.preventDefault();
    console.log("handleClick is running and the points are " + props.points);
    console.log(props);
    props.decrementer(props.points);
  }

  return(
    <div>
      <img src='http://www.intoxitones.com/mtg_render/m15/rakdos_640.jpg'
        width='300px'
        height = '400px'></img>
      <p>{props.name}</p>
      <p>Rakdos</p>
      <p>{props.points}</p>
      <button onClick={handleIncrementClick}>Incrment</button>
      <button onClick={handleDecrementClick}>Decrement</button>
    </div>
  );
}
