import React, { Component } from 'react'

export default class Slot extends Component {
  constructor(props){
    super(props);
    this.state={
      winner:null,
    }
  }
    isWinner(symbol1, symbol2, symbol3) {
              return ((symbol1 === symbol2) && (symbol1 === symbol3));
            }
           
            handleClick = () => {
          this.setState( console.log("hi"))
              console.log(`you losser: ${ this.state.winner}`);
            }
          
    render() {
        const {symbol1, symbol2, symbol3} = this.props;
      this.state.winner = this.isWinner(symbol1, symbol2, symbol3) ? 'Winner' : 'Loser';
        return (
           <>
          <div className='symbols'>
            <span>{symbol1}</span>
            <span>{symbol2}</span>
            <span>{symbol3}</span>
          </div>

          <button onClick={this.handleClick}>Click me </button>
           </>
        )
    }
}
