import React from 'react';

class RomanChamp extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      isEditing: false,
      input: '',
    }
  }

// These two are for editing the taunt
  toggleEdit = () => {
    this.setState({
      isEditing: !this.state.isEditing,
    })
    return this.props.romanChamp.taunt = this.state.input
  }
  handleChange = (e) => {
    this.setState({
      input: e.target.value
    })
  }

// Swap out champ
  swapChamp = (arg) => {
    this.props.swapRomanChamp(arg)
  }

// Delete killed champ, when hp=0 invoke this one
  // removeChamp = (arg) => {
  //   this.props.removeRomanChamp(arg)
  // }
  
  render () {
    const { id, name, image, taunt, hp, attack, defense, heal } = this.props.romanChamp
    const { editRomanTaunt, romanAtk, romanHeal } = this.props

    return(
      <div className="champ-card">
        <h1 className="champ-title">
          Roman Champion
        </h1>
        <p className='godName'>
          {name}
        </p>
        <img
          src={image}
          alt={name}
          onDoubleClick={() => this.swapChamp(id)}
        />
        <div>
          {this.state.isEditing ? (
            <div>
              <input
                placeholder="New taunt here"
                onChange={this.handleChange}
              />
              <button
                onClick={() => {
                  editRomanTaunt(id, this.state.input)
                  this.toggleEdit()
                }}
              >
                Save Taunt
              </button>
            </div>
          ) : (
            <p
              className="taunt"
              onDoubleClick={this.toggleEdit}
            >
              {taunt}
            </p>
          )}
        </div>
        <div className="battle-cards">
          <div className="stats">
            <div
              className="hp"
            >
              HP: {hp}
            </div>
            <div
              className="defense"
            >
              DEF: {defense}
            </div>
          </div>
          <div
            className="battle-buttons"
          >
            <button
              className="attack"
              onClick={() => romanAtk(attack)}
            >
              ATK: {attack}
            </button>
            <button
              className="heal"
              onClick={() => romanHeal()}
            >
              HEAL: {heal}
            </button>
          </div>
        </div>
      </div>
    )
  }
}
 
export default RomanChamp;