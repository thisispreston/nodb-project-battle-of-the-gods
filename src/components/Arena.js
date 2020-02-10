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
    }).catch( (err) => console.log(err))
    axios.get('/api/romans').then( response => {
      this.setState({ 
        romans: response.data,
      })
    }).catch( (err) => console.log(err))
  }

// Select Champion
  selectGreekChamp = (arg) => {
    axios.post('/api/greek-champ', { arg }).then( res => {
      this.setState({
        greekChamp: res.data
      })
    }).catch( (err) => console.log(err))
  }
  selectRomanChamp = (arg) => {
    axios.post('/api/roman-champ', { arg }).then( res => {
      this.setState({
        romanChamp: res.data
      })
    }).catch( (err) => console.log(err))
  }

// Edit the taunts
  editGreekTaunt = (id, newTaunt) => {
    axios.put(`/api/greeks/${id}`, { newTaunt }).then(res => {
      this.setState({
        greeks: res.data
      })
    }).catch( (err) => console.log(err))
  }
  editRomanTaunt = (id, newTaunt) => {
    axios.put(`/api/romans/${id}`, { newTaunt }).then(res => {
      this.setState({
        romans: res.data
      })
    }).catch( (err) => console.log(err))
  }

// Swap Champ out
  swapGreekChamp = (arg) => {
    axios.delete(`/api/greek-champ`, { arg }).then( res => {
      this.setState({
        greekChamp: res.data
      })
    }).catch( (err) => console.log(err))
  }
  swapRomanChamp = (arg) => {
    axios.delete(`/api/roman-champ`, { arg }).then( res => {
      this.setState({
        romanChamp: res.data
      })
    }).catch( (err) => console.log(err))
  }

// To the Underworld for the losers!
  // removeGreekChamp = (id) => {
  //   axios.delete(`/api/greeks/${id}`).then( res => {
  //     this.setState({
  //       greeks: res.data
  //     })
  //   }).catch( () => console.log(err))
  // }
  // removeRomanChamp = (id) => {
  //   axios.delete(`/api/romans/${id}`).then( res => {
  //     this.setState({
  //       romans: res.data
  //     })
  //   }).catch( () => console.log(err))
  // }

  findGreek = (name) => {
    axios.get(`/api/greeks?name=${name}`).then( response => {
      this.setState({ 
        greeks: response.data
      })
    }).catch( (err) => console.log(err))
  }
  findRoman = (name) => {
    axios.get(`/api/romans?name=${name}`).then( response => {
      this.setState({ 
        romans: response.data
      })
    }).catch( (err) => console.log(err))
  }

// There are for attack buttons
  // greekAtk = (atk) => {
  //   axios.put(`/api/romans/${this.state.romanChamp.id}`, { atk }).then(res => {
  //     console.log(res.data.allRomans)
  //     this.setState({
  //       romans: res.data.allRomans,
  //       romanChamp: [res.data.romanChamp]
  //     })
  //   }).catch( (err) => console.log(err))
  // }
  // romanAtk = (id, atk) => {
  //   axios.put(`/api/greeks/${id}`, { atk }).then(res => {
  //     this.setState({
  //       greeks: res.data
  //     })
  //   }).catch( (err) => console.log(err))
  // }

  render () {
    return ( 
      <div className="body">
        <Greeks
          greeks={this.state.greeks}
          selectGreekChamp={this.selectGreekChamp}
          findGreek={this.findGreek}
        />
        <div className='Battlefield'>
          <GreekChamp
            greekChamp={this.state.greekChamp}
            editGreekTaunt={this.editGreekTaunt}
            swapGreekChamp={this.swapGreekChamp}
            // greekAtk={this.greekAtk}
            // removeGreekChamp={this.removeGreekChamp}
          />
          <RomanChamp
            romanChamp={this.state.romanChamp}
            editRomanTaunt={this.editRomanTaunt}
            swapRomanChamp={this.swapRomanChamp}
            // romanAtk={this.romanAtk}
            // removeRomanChamp={this.removeRomanChamp}
          />
        </div>
        <Romans
          romans={this.state.romans}
          selectRomanChamp={this.selectRomanChamp}
          findRoman={this.findRoman}
        />
      </div>
    )
  }
}
 
export default Arena;