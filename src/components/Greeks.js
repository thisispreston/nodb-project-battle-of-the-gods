import React from 'react'
import './Greeks.css'

class Greeks extends React.Component {
  constructor(props){
    super(props)

    this.state = {

    }
  }

  selectChamp = (arg) => {
    this.props.selectGreekChamp(arg)
  }

  render () { 
    const { greeks } = this.props
    
    let greekList = greeks.map( e => {
      return (
        <div
          key={e.id}
          className="godCard"
        >
          <h1>
            {e.name}
          </h1>
          <img
            src={e.image}
            alt={e.name}
            onClick={() => this.selectChamp(e)}
          />
        </div>
      )
    })

    return ( 
      <div className="gods-column">
        <h1>
          GREEKS
        </h1>
        {greekList}
      </div>
    );
  }
}
 
export default Greeks;

