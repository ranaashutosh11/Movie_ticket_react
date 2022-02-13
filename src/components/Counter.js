import React, { Component } from 'react'
import './style.css'

class Counter extends Component {
    constructor(props){
        super(props)

        this.state={
            count:0,
            remain:100
        }
    }
    plus(){
        this.setState({
            count:this.state.count+1
        })
    }
    minus(){
        this.setState({
            count:this.state.count-1 
            })
    }
    calculate()
    {   alert("Tickets Bookes Successfully!")
        this.setState({
            count:0,
            remain:this.state.remain-this.state.count
        })
    }
  render() {
    return (
       <div> 
           <h3>Tickets Remaining:{this.state.remain}</h3>
      <div className='counter'>
          <button onClick={()=>this.minus()}>-</button>
          <h3>{this.state.count}</h3>
          <button onClick={()=>this.plus()}>+</button>
      </div>
      <button onClick={()=>this.calculate()} className='submit'>Save</button>
      </div>
    )
  }
}
export default Counter
