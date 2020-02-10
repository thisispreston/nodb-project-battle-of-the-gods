import React from 'react';

class RomanChamp extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      isEditing: false,
      input: '',
    }
  }

// Tried to get things to re-render
  componentDidUpdate (prevProps, prevState) {
    // console.log(prevProps, this.props)
    if (prevProps !== this.props) {
      this.render()
    }
  }

  // These two are for editing the taunt
  toggleEdit = () => {
    this.setState({
      isEditing: !this.state.isEditing,
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
    const { id, name, image, taunt } = this.props.romanChamp
    const { editRomanTaunt } = this.props
    console.log(this.props)
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
      </div>
    )
  }
}
 
export default RomanChamp;