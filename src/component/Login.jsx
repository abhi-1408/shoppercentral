import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import {
  Box,
  Checkbox,
  Container,
  TextField,
  Button,
  Input,
  List,
  ListItemIcon,
  ListItem,
  ListItemText,
  Tabs,
  AppBar,
  TabPanel
} from "@material-ui/core";
import { AuthContext } from "../context/AuthContextProvider";
import { ThemeContext } from "../context/ThemeContextProvider";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      pwd: "",
      count: 0
    };
    this.count = 0;
  }

  componentDidMount() {
    console.log("COMPONENT MOUNTED", this.count++);
  }
  componentDidUpdate() {
    console.log("COMPONENT updated", this.count++);
  }

  chg = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  login = () => {
    if (this.state.user == "admin" && this.state.pwd == "1234") {
      // this.props.chg_l();
      console.log("MATCHED ADMIN");
    } else {
      alert("WRONG CREDENTIALS");
    }
  };

  submit = (toggleAuth, toggleBack) => {
    if (this.state.user == "abhi" && this.state.pwd == "sak") {
      console.log("INSIDE MATCHED");
      this.props.chg_l();
      toggleAuth();
      toggleBack();
    }
  };

  logout = (toggleAuth, toggleBack) => {
    this.props.chg_l();
    toggleAuth();
    toggleBack();
  };




  render() {
    return (
      <ThemeContext.Consumer>
        {theme => (
          <AuthContext.Consumer>
            {value => {
              console.log("IN LOGIN AUTH", value);
              console.log("THEME VALUE", theme);
              const { authFlag, toggleAuth } = value;
              const { toggleBack } = theme;

              if (authFlag) {
                return (
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => this.logout(toggleAuth, toggleBack)}
                  >
                    LOGOUT
                  </Button>
                );
              } else {
                return (
                  <Box>
                    <Box>
                      <TextField
                        variant="outlined"
                        label="username"
                        name="user"
                        value={this.state.user}
                        onChange={this.chg}
                      />
                    </Box>
                    <Box m={1}>
                      <TextField
                        variant="outlined"
                        label="password"
                        name="pwd"
                        value={this.state.pwd}
                        onChange={this.chg}
                      />
                    </Box>
                    <Box>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => this.submit(toggleAuth, toggleBack)}
                      >
                        LOGIN
                      </Button>
                    </Box>
                  </Box>
                );
              }
            }}
          </AuthContext.Consumer>
        )}
      </ThemeContext.Consumer>
    );
  }
}

export default Login;
