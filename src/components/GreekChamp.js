import React from 'react';

class GreekChamp extends React.Component {
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
    this.props.removeGreekChamp(arg)
  }
  
  render () {
    const {id, name, image, taunt} = this.props.greekChamp

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
          onDoubleClick={() => this.removeChamp(id)}
        />
        <p className='taunt'>
          {taunt}
        </p>
      </div>
    )
  }
}

export default GreekChamp
