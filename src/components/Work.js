import React, { Component } from 'react'
import "./style.css"
import {
  Link
} from 'react-router-dom';
class Work extends Component {
  render() {
    return (
      <div className='movie_card'>
          <div className='card_body'>
          <div className='poster'>
          <img src={this.props.img}/>
          </div>
          
          <p className='name'>{this.props.name}</p><br/><br/><br/>
        
        <Link to={"/comp/"+this.props.id}  className='submit'>Book Ticket</Link>
      </div>
      </div>
    )
  }
}

export default Work