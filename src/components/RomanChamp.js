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
      isEditing: !this.state.isEditing
    })
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
    const {id, name, image } = this.props.romanChamp

    return(
      <div>
        <h1>
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
                onChange={this.handleChange}
              />
              <button
                onClick={() => {
                  this.props.editRomanTaunt(id, this.state.input)
                  this.toggleEdit()
                }}
              >
                Save Taunt
              </button>
            </div>
          ) : (
            <p
              onDoubleClick={this.toggleEdit}
            >
              {this.props.romanChamp.taunt}
            </p>
          )}
        </div>
      </div>
    )
  }
}
 
export default RomanChamp;