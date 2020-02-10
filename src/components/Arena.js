import React, { Component } from 'react';
import axios from 'axios'
import Greeks from './Greeks';
import GreekChamp from './GreekChamp'
import RomanChamp from './RomanChamp'
import Romans from './Romans'
import './Arena.css'

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
    }).catch( () => alert("Failed to appease the Greek gods."))
    axios.get('/api/romans').then( response => {
      this.setState({ 
        romans: response.data,
      })
    }).catch( () => alert("Failed to appease the Roman gods."))
  }

// Select Champion
  selectGreekChamp = (arg) => {
    axios.post('/api/greek-champ', { arg }).then( res => {
      this.setState({
        greekChamp: res.data
      })
    }).catch( () => alert("No Greek champion responded."))
  }
  selectRomanChamp = (arg) => {
    axios.post('/api/roman-champ', { arg }).then( res => {
      this.setState({
        romanChamp: res.data
      })
    }).catch( () => alert("No Roman champion responded."))
  }

// Edit the taunts
  editGreekTaunt = (id, newTaunt) => {
    axios.put(`/api/greeks/${id}`, { newTaunt }).then(res => {
      this.setState({
        greeks: res.data
      })
    }).catch( () => alert("Your Greek taunt has failed."))
  }
  editRomanTaunt = (id, newTaunt) => {
    axios.put(`/api/romans/${id}`, { newTaunt }).then(res => {
      this.setState({
        romans: res.data
      })
    }).catch( () => alert("Your Roman taunt has failed."))
  }

// Swap Champ out
  swapGreekChamp = (arg) => {
    axios.delete(`/api/greek-champ`, { arg }).then( res => {
      this.setState({
        greekChamp: res.data
      })
    }).catch( () => alert("Your Greek champion has not left arena!"))
  }
  swapRomanChamp = (arg) => {
    axios.delete(`/api/roman-champ`, { arg }).then( res => {
      this.setState({
        romanChamp: res.data
      })
    }).catch( () => alert("Your Roman champion has not left arena!"))
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
      <div className="body">
        <Greeks
          className="Greeks"
          greeks={this.state.greeks}
          selectGreekChamp={this.selectGreekChamp}
        />
        <div className='Battlefield'>
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
          className="Romans"
          romans={this.state.romans}
          selectRomanChamp={this.selectRomanChamp}
        />
      </div>
    )
  }
}
 
export default Arena;