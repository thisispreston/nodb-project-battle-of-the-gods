import React from 'react';

class GreekChamp extends React.Component {
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
      isEditing: !this.state.isEditing
    })
    return this.props.greekChamp.taunt = this.state.input
  }
  handleChange = (e) => {
    this.setState({
      input: e.target.value
    })
  }

// Swap Champ out
  swapChamp = (arg) => {
    this.props.swapGreekChamp(arg)
  }

// Delete killed champ, when hp=0 invoke this one
  // removeChamp = (arg) => {
  //   this.props.removeGreekChamp(arg)
  // }
  
  render () {
    const { id, name, image, taunt, hp, attack, defense, heal } = this.props.greekChamp
    const { editGreekTaunt, greekAtk, greekHeal } = this.props

    return(
      <div className="champ-card">
        <h1 className="champ-title">
          Greek Champion
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
                  editGreekTaunt(id, this.state.input)
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
              onClick={() => greekAtk(attack)}
            >
              ATK: {attack}
            </button>
            <button
              className="heal"
              onClick={() => greekHeal()}
            >
              HEAL: {heal}
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default GreekChamp
