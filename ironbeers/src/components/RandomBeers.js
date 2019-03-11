import React, { Component } from 'react';
import axios from 'axios'


class Random extends Component {

    state = {
        randomBeer: {}
    }

    componentDidMount(){
        axios.get('https://ironbeer-api.herokuapp.com/beers/random')
            .then(res=>{
                console.log(res)
                this.setState({
                    randomBeer:res.data[0]
                })
            })
    }

    render(){
        return(
            <div>

                <img style={{width:"100px"}} src={this.state.randomBeer.image_url}/>
                <h1>{this.state.randomBeer.name}</h1>
                <i>{this.state.randomBeer.description}</i>
            </div>
        )
    }
}

export default Random
