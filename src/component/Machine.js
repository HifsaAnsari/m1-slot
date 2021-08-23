import React, { Component } from 'react'
import Slot from './Slot';
export default class Machine extends Component {
  constructor(props) {
    super(props);
    this.state = {Emoji1: '',Emoji2:'',Emoji3:'',};

    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleChange3 = this.handleChange3.bind(this);
   
  }

  handleChange1(event) {
    this.setState({Emoji1: event.target.value});
 
  }

  handleChange2(event) {
    this.setState({Emoji2: event.target.value});
 
  }

  handleChange3(event) {
    this.setState({Emoji3: event.target.value});
 
  }



  render() {

    return (
      <>

        <label>
          Pick your favorite flavor:
          </label>

          <select onChange={this.handleChange1 } value={this.state.Emoji1} className="slct">
          <option value=""  disabled selected>Select an option&hellip;</option>
            <option value="grapefruit" >Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
          <select onChange={this.handleChange2 } value={this.state.Emoji2} className="slct" >
          <option value=""disabled selected>Select an option&hellip;</option>
            <option value="grapefruit" >Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
          
          <select onChange={this.handleChange3 } value={this.state.Emoji3} className="slct">
          <option value="" disabled selected>Select an option&hellip;</option>
            <option value="grapefruit" >Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
       
  
        <Slot symbol1={this.state.Emoji1} symbol2={this.state.Emoji2} symbol3={this.state.Emoji3}/>
      </>
    );
  }

}