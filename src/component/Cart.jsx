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
  CardMedia,
  Paper,
  Grid,
  FormRow
} from "@material-ui/core";

const Cart = props => {
  const { items } = props;
  console.log("cart item is", items);
  return (
    <>
      {items.map(ele => {
        if (ele.cat == "mob") {
          return (
            <Box m={2}>
              <Paper>
                <Grid container alignItems="center">
                  <Grid item xs={3}>
                    <img
                      width="100px"
                      height="100px"
                      src="https://static.thenounproject.com/png/3262557-200.png"
                    />
                  </Grid>
                  <Grid item xs={9} m={2}>
                    <Typography>{ele.name}</Typography>
                    <Grid container m={3}>
                      <Grid item xs={6}>
                        <Typography>
                          <img
                            width="20px"
                            height="20px"
                            src="https://static.thenounproject.com/png/2876526-200.png"
                          />
                          {ele.price}
                        </Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography>Count {ele.count}</Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            </Box>

            // <div style={{ border: "1px dashed grey" }}>
            //   <div>{ele.name}</div>
            //   <div>{ele.price}</div>
            //   <div>{ele.count}</div>
            // </div>
          );
        } else {
          return (
            <Box m={2}>
              <Paper>
                <Grid container alignItems="center">
                  <Grid item xs={3}>
                    <img
                      width="100px"
                      height="100px"
                      src="https://static.thenounproject.com/png/3267485-200.png"
                    />
                  </Grid>
                  <Grid item xs={9} m={2}>
                    <Typography>{ele.name}</Typography>
                    <Grid container m={3}>
                      <Grid item xs={6}>
                        <Typography>
                          <img
                            width="20px"
                            height="20px"
                            src="https://static.thenounproject.com/png/2876526-200.png"
                          />
                          {ele.price}
                        </Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography>Count {ele.count}</Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            </Box>
          );
        }
      })}
    </>
  );
};

export default Cart;
