import React from "react";
import "./CounterClassComponent.css";

// Class components needs to be class and extend from React.Component
class CounterClassComponent extends React.Component {
  // constructor() its the first function called in the component
  // here you define the initial state
  constructor() {
    // Needed function to handle props from parent
    super();

    // Initializing state, counter starts at 0 and email as an empty string
    this.state = {
      counter: 0,
    };
  }

  // Each time the function is called, counter will increment by 1
  handleIncrement = () => {
    this.setState((prevState) => ({
      counter: prevState.counter + 1,
    }));
  };

  render() {
    return (
      <div>
        {/* Render the counter */}
        <p className="red">{this.state.counter}</p>
        {/* When button is clicked, run handleIncrement function  */}
        <button class="button" onClick={this.handleIncrement}>
          Increment +1
        </button>
      </div>
    );
  }
}

export default CounterClassComponent;
