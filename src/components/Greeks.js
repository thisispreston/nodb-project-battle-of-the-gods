import React from 'react'

class Greeks extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      input:``,
    }
  }

  selectChamp = (arg) => {
    this.props.selectGreekChamp(arg)
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value
    })
  }

  render () { 
    const { greeks, findGreek } = this.props
    
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
        <h1 className="column-title">
          GREEKS
        </h1>
        <div className="search-bar">
          <input
            className="search-input"
            placeholder="Search by name"
            onChange={this.handleChange}
          />
          <button
            className="search-button"
            onClick={() => findGreek(this.state.input)}
          >
            Search
          </button>
        </div>
        {greekList}
      </div>
    );
  }
}
 
export default Greeks;

