import React from "react";

// Class components needs to be class and extend from React.Component
class Counter extends React.Component {
  // constructor() its the first function called in the component
  // here you define the initial state
  constructor() {
    // Needed function to handle props from parent
    super();

    // Initializing state, counter starts at 0 and email as an empty string
    this.state = {
      counter: 0,
      email: "",
    };
  }

  // Each time the function is called, counter will increment by 1
  handleIncrement = () => {
    this.setState((prevState) => ({
      counter: prevState.counter + 1,
    }));
  };

  // Each time the function is called, email will have tha value of the input
  handleOnChange = (event) => {
    const typedEmail = event.target.value;

    this.setState(() => ({
      email: typedEmail,
    }));
  };

  // Each time the function is called, internal state will be logged with their current values
  handleSendRequest = () => {
    console.log(this.state);
  };

  render() {
    return (
      <div>
        {/* Render the counter */}
        <p>{this.state.counter}</p>
        {/* When button is clicked, run handleIncrement function  */}
        <button onClick={this.handleIncrement}>Increment +1</button>

        <div>
          <label for="email">E-mail</label>
          {/* When we write in the input, run handleOnChange function  */}
          <input
            type="email"
            id="email"
            name="email"
            onChange={this.handleOnChange}
          />
          {/* Render the email */}
          <p>{this.state.email}</p>
        </div>

        <div>
          {/* When button is clicked, run handleSendRequest function  */}
          <button onClick={this.handleSendRequest}>Send Request</button>
        </div>
      </div>
    );
  }
}

export default Counter;
