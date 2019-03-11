import React from 'react'
import axios from 'axios'

class AllBeers extends React.Component {


  state = {
    beers: []
  }

  componentDidMount(){
    axios.get('https://ironbeer-api.herokuapp.com/beers/all')
      .then(res => this.setState({beers: res.data }))
      .catch(err =>{
        console.log(err);
        return null
      })

  }

  render(){
      return(
        <div>
          {this.state.beers.map(beer => <li>{beer.name}</li>)}
        </div>
      )
  }
}

export default AllBeers
