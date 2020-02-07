import React, { Component } from 'react';
import axios from 'axios'
import Greeks from './Greeks';
import GreekChamp from './GreekChamp'
import RomanChamp from './RomanChamp'
import Romans from './Romans'

class Arena extends Component {
  constructor(props){
    super(props)
    this.state = {
      greeks: [],
      greekChamp: [],
      romans: [],
      romanChamp: [],
    }
  }

  componentDidMount () {
    axios.get('/api/greeks').then( response => {
      this.setState({ 
        greeks: response.data
      })
    })
    axios.get('/api/romans').then( response => {
      this.setState({ 
        romans: response.data,
      })
    })
  }

// Select Champion
  selectGreekChamp = (arg) => {
    axios.post('/api/greek-champ', { arg }).then( res => {
      this.setState({
        greekChamp: res.data
      })
    })
  }
  selectRomanChamp = (arg) => {
    axios.post('/api/roman-champ', { arg }).then( res => {
      this.setState({
        romanChamp: res.data
      })
    })
  }

// To the Underworld for the losers!
  removeGreekChamp = (id) => {
    axios.delete(`/api/greeks/${id}`).then( res => {
      this.setState({
        greeks: res.data
      })
    })
  }
  removeRomanChamp = (id) => {
    axios.delete(`/api/romans/${id}`).then( res => {
      this.setState({
        romans: res.data
      })
    })
  }

  render () {
    return ( 
      <div>
        <Greeks
          greeks={this.state.greeks}
          selectGreekChamp={this.selectGreekChamp}
        />
        <div className='BattleField'>
          Arena
          <GreekChamp
            greekChamp={this.state.greekChamp}
            removeGreekChamp={this.removeGreekChamp}
          />
          <RomanChamp
            romanChamp={this.state.romanChamp}
            removeRomanChamp={this.removeRomanChamp}
          />
        </div>
        <Romans
          romans={this.state.romans}
          selectRomanChamp={this.selectRomanChamp}
        />
      </div>
    )
  }
}
 
export default Arena;