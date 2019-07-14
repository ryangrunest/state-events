import React, { Component } from 'react';

class Number extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0
    }
  }

  button = <button onClick={() => this.handleClick()}>ClickMe</button>;

  handleClick() {
    let newNum = Math.floor(Math.random() * 10) + 1;
    this.setState({number: newNum})
    if (newNum === 7) {
      this.button = <h2>You won!!</h2>;
    }
  }

  render() {
    return(
      <div>
        <h1>Your Number Is: {this.state.number}</h1>
        {this.button}
      </div>
    )
  }
}

export default Number;