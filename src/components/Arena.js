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
  
  //Query bar
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
  
  // To the Underworld for the losers!
    removeGreekChamp = (id) => {
      axios.delete(`/api/greeks/${id}`).then( res => {
        this.setState({
          greeks: res.data
        })
      }).catch( (err) => console.log(err))
    }
    removeRomanChamp = (id) => {
      axios.delete(`/api/romans/${id}`).then( res => {
        this.setState({
          romans: res.data
        })
      }).catch( (err) => console.log(err))
    }

  //These are for attack buttons
  greekAtk = (atk) => {
    let { defense, hp, id } = this.state.romanChamp

    let newHp = hp - +atk * (1 - (defense / 100))

    if (newHp <= 0) {
      if (id !== 9) {
        this.removeRomanChamp(id)
      }
      return this.setState({
        romanChamp: {
          id: 9,
          name: 'Pluto',
          image: 'https://as1.ftcdn.net/jpg/01/65/54/04/500_F_165540497_cFwiLdFRG1QAkiUWfdgP7dMyXxVSfNH8.jpg',
          taunt: `Welcome to the underworld!`,
          hp: '',
          attack: '',
          defense: '',
          heal: '',
        }
      })
    }
    
    this.setState({
      romanChamp: {...this.state.romanChamp, hp: newHp}
    })
  }
  romanAtk = (atk) => {
    let { defense, hp, id } = this.state.greekChamp

    let newHp = hp - +atk * (1 - (defense / 100))

    if (newHp <= 0) {
      if (id !== 9) {
        this.removeGreekChamp(id)
      }
      return this.setState({
        greekChamp: {
          id: 9,
          name: 'Hades',
          image: 'https://i.pinimg.com/originals/f7/3f/0a/f73f0adffaa00c92b8b6332a5598edb8.jpg',
          taunt: `Thanks for the soul.`,
          hp: '',
          attack: '',
          defense: '',
          heal: '',
        }
      })
    }
    
    this.setState({
      greekChamp: {...this.state.greekChamp, hp: newHp}
    })
  }

  // Heal Buttons
  greekHeal = () => {
    let { heal, hp, id } = this.state.greekChamp
    let newHp = hp + heal
    const index = this.state.greeks.findIndex( e => {
      return e.id === id
    })

    if (newHp <= this.state.greeks[index].hp) {
      return this.setState({
        greekChamp: {...this.state.greekChamp, hp: newHp}
      })
    } else {
      return this.setState({
        greekChamp: {...this.state.greekChamp, hp: this.state.greeks[index].hp}
      })
    }
  }
  romanHeal = () => {
    let { heal, hp, id } = this.state.romanChamp
    let newHp = hp + heal
    const index = this.state.romans.findIndex( e => {
      return e.id === id
    })

    if (newHp <= this.state.romans[index].hp) {
      return this.setState({
        romanChamp: {...this.state.romanChamp, hp: newHp}
      })
    } else {
      return this.setState({
        romanChamp: {...this.state.romanChamp, hp: this.state.romans[index].hp}
      })
    }
  }

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
            greekAtk={this.greekAtk}
            greekHeal={this.greekHeal}
          />
          <RomanChamp
            romanChamp={this.state.romanChamp}
            editRomanTaunt={this.editRomanTaunt}
            swapRomanChamp={this.swapRomanChamp}
            romanAtk={this.romanAtk}
            romanHeal={this.romanHeal}
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