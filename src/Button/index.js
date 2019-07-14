import React, {Component} from 'react';

class Button extends Component {
  // create constructors for state values
  constructor(props) {
    super(props);
    this.state = {
      clickCount : 0
    }
  }
  handleClick() {
    this.setState({clickCount : this.state.clickCount + 1});
  }
  render() {
    return(
      <div className="Button">
        <h1>{this.state.clickCount}</h1>
        <button onClick={() => this.handleClick()}>Button</button>
      </div>
      
    )
  }
}

export default Button;