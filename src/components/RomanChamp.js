import React from 'react';

class RomanChamp extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      isEditing: false,
      input: '',
    }
  }

  // toggleEdit = () => {
  //   this.setState({
  //     isEditing: !this.state.isEditing
  //   })
  // }

  // handleChange = () => {
  //   this.setState({
  //     input: e.target.value
  //   })
  // }

  removeChamp = (arg) => {
    this.props.removeRomanChamp(arg)
  }
  
  render () {
    const {id, name, image, taunt } = this.props.romanChamp

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
          onDoubleClick={() => this.removeChamp(id)}
        />
        <p className='taunt'>
          {taunt}
        </p>
      </div>
    )
  }
}
 
export default RomanChamp;