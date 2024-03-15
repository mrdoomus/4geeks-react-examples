import React from "react";

class ClockComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      currentTime: new Date(),
    };
  }

  render() {
    setTimeout(
      () =>
        this.setState({
          currentTime: new Date(),
        }),
      1000
    ); // Each second, update currentTime with the current date and hour

    const componentStyles = {
      color: this.props.textColor,
    };

    return (
      <div style={componentStyles}>{this.state.currentTime.toString()}</div>
    );
  }
}

export default ClockComponent;

// const house = {
//   color: "Red",
//   city: "Miami",
//   printHouseName: function () {
//     console.log("Im a house");
//   },

//   constructor: function () {},
//   render: function () {},
// };

// house.printHouseName();
