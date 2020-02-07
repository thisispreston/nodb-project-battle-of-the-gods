import React, {Component} from 'react';
import axios from 'axios';
import './Greeks.css'

class Greeks extends Component {
  constructor(props){
    super(props)

    this.state = {
      greeks: [],
    }
  }

  componentDidMount () {
    axios.get('/api/greeks').then( response => {
      this.setState({ 
        greeks: response.data
      })
    })
  }

  chooseGreek = (arg) => {
    this.props.populatePlayerOne(arg)
  }

  render () { 
    const { greeks } = this.state
    console.log(this.state)

    let greekList = greeks.map( god =>{
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
            onClick={this.chooseGreek(god)}
          />
        </div>
      )
    })

    return ( 
      <div>
        <h1>
          THE GREEKS ARE HERE
        </h1>
        {greekList}
      </div>
    );
  }
}
 
export default Greeks;

