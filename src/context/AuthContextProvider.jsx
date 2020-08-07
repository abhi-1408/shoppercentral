import React, { Component, createContext } from "react";

export const AuthContext = createContext();

export class AuthContextProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authFlag: false,
      user: "",
      pass: ""
    };
  }

  toggleAuth = () => {
    console.log("AUTH CONTEXT TOGGLE CALLED");
    this.setState({ authFlag: !this.state.authFlag });
  };

  render() {
    return (
      <AuthContext.Provider
        value={{ ...this.state, toggleAuth: this.toggleAuth }}
      >
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}
