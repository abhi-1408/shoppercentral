import React, { Component } from "react";
import { Link, Route, Redirect, Switch } from "react-router-dom";
import Mobile from "./Mobile";
import Camera from "./Camera";
import Cart from "./Cart";
import Login from "./Login";
import Display from "./Display";
import { ThemeContext } from "../context/ThemeContextProvider";
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
  TabPanel,
  Paper,
  Grid,
  FormRow
} from "@material-ui/core";
import alldata from "../alldata.json";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      f_login: false,
      cart: [],
      data: alldata
    };
  }

  chg_login = () => {
    this.setState({ f_login: !this.state.f_login });
    if (this.state.f_login == false) {
      this.setState({ cart: [] });
    }
    console.log("LOGIN DONE");
  };

  addToCart = ele => {
    let cart = this.state.cart;
    // console.log("MAIN CART IS", ele);

    let flag = 0;

    cart.map(item => {
      if (item.id == ele.id) {
        item.count++;
        flag = 1;
      }
    });

    // let ca = cart.filter(item => item.id != ele.id);

    if (flag == 0) {
      let obj = { ...ele, count: 1 };
      this.setState({ cart: [...cart, obj] });
    } else if (flag == 1) {
      this.setState({ cart: cart });
    }

    console.log("cart items are", this.state.cart);
  };

  render() {
    return (
      <ThemeContext.Consumer>
        {theme => {
          console.log("IN MAIN theme is:", theme);
          const { isLightMode, light, dark } = theme;
          return (
            <div style={isLightMode ? light : dark}>
              <Container>
                <AppBar>
                  <Tabs>
                    <Button>
                      <Link
                        style={{ textDecoration: "none", color: "white" }}
                        to="/"
                      >
                        ShopperStop
                      </Link>
                    </Button>
                    <Button>
                      <Link
                        style={{ textDecoration: "none", color: "white" }}
                        to="/mobile"
                      >
                        Mobile
                      </Link>
                    </Button>
                    <Button>
                      <Link
                        style={{ textDecoration: "none", color: "white" }}
                        to="/camera"
                      >
                        Camera
                      </Link>
                    </Button>
                    <Button>
                      <Link
                        style={{ textDecoration: "none", color: "white" }}
                        to="/cart"
                      >
                        Cart
                      </Link>
                    </Button>
                    <Button>
                      <Link
                        style={{ textDecoration: "none", color: "white" }}
                        to="/login"
                      >
                        {this.state.f_login ? "Logout" : "Login"}
                      </Link>
                    </Button>
                  </Tabs>
                </AppBar>
                <Box m={10}>
                  <h1>ShopperStop</h1>
                </Box>
              </Container>

              <Container>
                <Switch>
                  <Route
                    exact
                    path="/mobile"
                    render={props => (
                      <Mobile
                        data={this.state.data}
                        {...props}
                        flag={this.state.f_login}
                        add={this.addToCart}
                      />
                    )}
                  />

                  <Route
                    path={`/mobile/:id`}
                    render={props =>
                      this.state.f_login ? (
                        <Display
                          data={this.state.data}
                          {...props}
                          add={this.addToCart}
                        />
                      ) : (
                        <Redirect to="/login" />
                      )
                    }
                  />

                  <Route
                    exact
                    path="/camera"
                    render={props => (
                      <Camera
                        data={this.state.data}
                        flag={this.state.f_login}
                        {...props}
                        add={this.addToCart}
                      />
                    )}
                  />
                  <Route
                    path="/camera/:id"
                    render={props =>
                      this.state.f_login ? (
                        <Display
                          data={this.state.data}
                          {...props}
                          add={this.addToCart}
                        />
                      ) : (
                        <Redirect to="/login" />
                      )
                    }
                  />

                  <Route
                    path="/cart"
                    render={props =>
                      this.state.f_login ? (
                        <Cart items={this.state.cart} {...props} />
                      ) : (
                        <Redirect to="/login" />
                      )
                    }
                  />

                  <Route
                    path="/login"
                    render={props => (
                      <Login
                        chg_l={this.chg_login}
                        flag={this.state.f_login}
                        {...props}
                      />
                    )}
                  />

                  <Route
                    render={() => {
                      return <Box />;
                    }}
                  />
                </Switch>
              </Container>
            </div>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default Main;
