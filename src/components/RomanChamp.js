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
  
  render () {
    const {name, image, taunt} = this.props.romanChamp

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
        />
        <p className='taunt'>
          {taunt}
        </p>
      </div>
    )
  }
}
 
export default RomanChamp;