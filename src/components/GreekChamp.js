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
    const { id, name, image } = this.props.greekChamp

    return(
      <div>
        <h1>
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
                onChange={this.handleChange}
              />
              <button
                onClick={() => {
                  this.props.editGreekTaunt(id, this.state.input)
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
              {this.props.greekChamp.taunt}
            </p>
          )}
        </div>
      </div>
    )
  }
}

export default GreekChamp
