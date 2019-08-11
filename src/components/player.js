import React from 'react';


export default function player(props){

  const handleClick = (e) => {
    e.preventDefault();
    props.incrementer(props.points);
  }


  return(
    <div>
      <img src='http://www.intoxitones.com/mtg_render/m15/rakdos_640.jpg'
        width='300px'
        height = '400px'></img>
      <p>{props.name}</p>
      <p>Rakdos</p>
      <p>{props.points}</p>
      <button onClick={handleClick}>Incrment</button>
    </div>
  );
}
