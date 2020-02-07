import React, { Component } from 'react';
import Greeks from './Greeks';
import PlayerOne from './PlayerOne'
import PlayerTwo from './PlayerTwo'
import Romans from './Romans'

class Arena extends Component {
  constructor(props){
    super(props)
    this.state = {
      playerOne: {},
      playerTwo: {}
    }
  }

  populatePlayerOne = (arg) => {
    this.setState({
      playerOne: arg
    })
  }

  populatePlayerTwo = (arg) => {
    this.setState({
      playerTwo: arg
    })
  }

  render () { 
    return ( 
      <div>
        <h1>
          Arena
        </h1>
        <Greeks
          populatePlayerOne={this.populatePlayerOne}
        />
        <PlayerOne
          playerOne={this.state.playerOne}
        />
        <PlayerTwo
          playerTwo={this.state.playerTwo}
        />
        <Romans
          populatePlayerTwo={this.populatePlayerTwo}
        />
      </div>
    )
  }
}
 
export default Arena;