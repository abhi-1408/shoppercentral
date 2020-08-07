import React, { Component, createContext } from "react";

export const ThemeContext = createContext();

export class ThemeContextProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLightMode: false,
      light: { backgroundColor: "white" },
      dark: { backgroundColor: "grey" }
    };
  }

  toggleBack = () => {
    console.log("BACK TOGGLE CALLED");
    this.setState({ isLightMode: !this.state.isLightMode });
  };

  render() {
    return (
      <ThemeContext.Provider
        value={{ ...this.state, toggleBack: this.toggleBack }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}
