import React, { Component } from 'react';
import Greek from './Greek';
import PlayerOne from './PlayerOne'

class Arena extends Component {
  constructor(props){
    super(props)
    this.state = {
      playerOne: {},
      playerTwo: {}
    }
    this.populatePlayerOne = this.populatePlayerOne.bind(this)
  }

   populatePlayerOne(arg){
     this.setState({
       playerOne: arg
     })
   }
   

  render() { 
    return ( 
      <div>
        <h1>Arena</h1>
        <PlayerOne playerOne={this.state.playerOne} />

        <Greek populatePlayerOne={this.populatePlayerOne}/>
      </div>
     );
  }
}
 
export default Arena;