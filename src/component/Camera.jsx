import React, { Component } from "react";
import { Link, Route, Redirect } from "react-router-dom";
import Display from "./Display";
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

const Camera = props => {
  const { data, match, add, flag } = props;
  return (
    <>
      {/* <Route
        exact
        path={`${match.path}/:id`}
        render={props =>
          flag ? (
            <Display data={data} {...props} add={add} />
          ) : (
            <Redirect to="/login" />
          )
        }
      /> */}
      <List component="nav">
        {data.map(item => {
          if (item.cat == "cam") {
            return (
              <>
                {/* <div
                name={item.id}
                style={{ margin: "10px", border: "2px solid black" }}
              > */}
                <ListItem>
                  <ListItemIcon>
                    <img
                      width="80%"
                      src="https://static.thenounproject.com/png/3267550-200.png"
                    />
                  </ListItemIcon>
                  <ListItemText>
                    <Link
                      style={{ textDecoration: "none" }}
                      to={`${match.url}/${item.id}`}
                    >
                      {" "}
                      {item.name}
                    </Link>
                  </ListItemText>
                </ListItem>
                {/* </div> */}
              </>
            );
          }
        })}
      </List>
    </>
  );
};

export default Camera;
