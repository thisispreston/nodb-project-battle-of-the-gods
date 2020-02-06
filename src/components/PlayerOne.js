import React from 'react';

const PlayerOne = (props) =>{
  const {name, image} = props.playerOne;
  console.log('player one props', props)
  return(
    <div>
      <h1>player one</h1>
      <p>{name}</p>
      <img src={image} alt={name} />
    </div>
  )
}
 
export default PlayerOne;