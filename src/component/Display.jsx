import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import {
  Box,
  Checkbox,
  Container,
  TextField,
  Button,
  Input,
  Card,
  CardActionArea,
  CardActions,
  Typography,
  CardContent,
  CardMedia
} from "@material-ui/core";

const Display = props => {
  const { data, match, add, history } = props;

  console.log("Display prop are", props);
  const res = data.find(ele => ele.id == match.params.id);
  function addCart() {
    // console.log("add clicked");

    add(res);
    history.push("/cart");
  }
  if (res.cat == "mob") {
    return (
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            width="100px"
            height="200px"
            image="https://static.thenounproject.com/png/3267609-200.png"
          />
          <CardContent>
            <Typography variant="h5" component="h2">
              {res.name}
            </Typography>
            <Typography variant="body1" component="h3">
              Price: {res.price}
            </Typography>
            <Typography variant="body2" component="p">
              Features: {res.feat}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="medium" color="primary" onClick={addCart}>
            ADD TO CART
          </Button>
        </CardActions>
      </Card>
    );
  } else {
    return (
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            width="150px"
            height="150px"
            image="https://static.thenounproject.com/png/3267550-200.png"
          />
          <CardContent>
            <Typography variant="h5" component="h2">
              {res.name}
            </Typography>
            <Typography variant="body1" component="h3">
              Price: {res.price}
            </Typography>
            <Typography variant="body2" component="p">
              Features: {res.feat}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="medium" color="primary" onClick={addCart}>
            ADD TO CART
          </Button>
        </CardActions>
      </Card>

      // <div>
      //   <div>Name: {res.name}</div>
      //   <div>Price: {res.price}</div>
      //   <div>Features: {res.feat}</div>
      //   <button onClick={addCart}>ADD TO CART</button>
      // </div>
    );
  }
};

export default Display;
