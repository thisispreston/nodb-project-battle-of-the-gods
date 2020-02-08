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

// Edit the taunts
  editGreekTaunt = (id, newTaunt) => {
    axios.put(`/api/greeks/${id}`, { newTaunt }).then(res => {
      this.setState({
        greeks: res.data
      })
    })
  }
  editRomanTaunt = (id, newTaunt) => {
    axios.put(`/api/romans/${id}`, { newTaunt }).then(res => {
      this.setState({
        romans: res.data
      })
    })
  }

// Swap Champ out
  swapGreekChamp = (arg) => {
    axios.delete(`/api/greek-champ`, { arg }).then( res => {
      this.setState({
        greekChamp: res.data
      })
    })
  }
  swapRomanChamp = (arg) => {
    axios.delete(`/api/roman-champ`, { arg }).then( res => {
      this.setState({
        romanChamp: res.data
      })
    })
  }

// To the Underworld for the losers!
  // removeGreekChamp = (id) => {
  //   axios.delete(`/api/greeks/${id}`).then( res => {
  //     this.setState({
  //       greeks: res.data
  //     })
  //   })
  // }
  // removeRomanChamp = (id) => {
  //   axios.delete(`/api/romans/${id}`).then( res => {
  //     this.setState({
  //       romans: res.data
  //     })
  //   })
  // }

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
            editGreekTaunt={this.editGreekTaunt}
            swapGreekChamp={this.swapGreekChamp}
            // removeGreekChamp={this.removeGreekChamp}
          />
          <RomanChamp
            romanChamp={this.state.romanChamp}
            editRomanTaunt={this.editRomanTaunt}
            swapRomanChamp={this.swapRomanChamp}
            // removeRomanChamp={this.removeRomanChamp}
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