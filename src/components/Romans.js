import React from 'react'

class Romans extends React.Component {
  constructor(props){
    super(props)

    this.state = {

    }
  }

  selectChamp = (arg) => {
    this.props.selectRomanChamp(arg)
  }

  render () { 
    const { romans } = this.props

    let romanList = romans.map( e =>{
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
          ROMANS
        </h1>
        {romanList}
      </div>
    );
  }
}
 
export default Romans;

