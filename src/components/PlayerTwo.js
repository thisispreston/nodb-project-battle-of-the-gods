import React from 'react';

const PlayerTwo = (props) =>{
  const {name, image} = props.playerTwo;
  console.log('player two props', props)

  return(
    <div>
      <h1>
        player two
      </h1>
      <p>
        {name}
      </p>
      <img
        src={image}
        alt={name}
      />
    </div>
  )
}
 
export default PlayerTwo;