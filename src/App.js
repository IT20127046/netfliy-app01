import React, { Component } from 'react';
import axios from 'axios';

export default class App extends Component {

  constructor(){
    super();
    this.state = {
      data: ""
    };
  }

  check = () => {
    axios.get("http://localhost:5000/react").then((res) => {
      if (res.data.success) {
        this.setState({
          data: "Backend Connected"
        });
      }
    });
  }

  render() {
    return (
      <div>
        <h1>Hello World!</h1>
        <h6>This is React</h6>

        <p>{this.state.data}</p>

        <button onClick={this.check} type="button">Check</button>
      </div>
    )
  }
}
