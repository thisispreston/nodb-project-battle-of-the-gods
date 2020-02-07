import React, {Component} from 'react';
import axios from 'axios';
import './Romans.css'

class Romans extends Component {
  constructor(props){
    super(props)

    this.state = {
      romans: [],
    }
  }

  componentDidMount () {
    axios.get('/api/romans').then( response => {
      this.setState({ 
        romans: response.data
      })
    })
  }

  chooseRoman = (arg) => {
    this.props.populatePlayerTwo(arg)
  }

  render () { 
    const { romans } = this.state
    console.log(this.state)

    let romanList = romans.map( god =>{
      return (
        <div
          key={god.id}
          className="godCard"
        >
          <h1>
            {god.name}
          </h1>
          <img
            src={god.image}
            alt={god.name}
            onClick={this.chooseRoman(god)}
          />
        </div>
      )
    })

    return ( 
      <div>
        <h1>
          THE ROMANS ARE HERE
        </h1>
        {romanList}
      </div>
    );
  }
}
 
export default Romans;

