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

const Mobile = props => {
  const { data, match, add, flag } = props;
  return (
    <>
      {/* <Route
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
          if (item.cat == "mob") {
            return (
              <>
                {/* <div
                name={item.id}
                style={{ margin: "10px", border: "2px solid black" }}
              > */}
                <ListItem>
                  <ListItemIcon>
                    <img
                      // width="25px"
                      // height="25px"
                      src="https://static.thenounproject.com/png/3268413-200.png"
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

export default Mobile;
