import React from "react";
import "./styles.css";
import Main from "./component/Main";
import { Container, Box } from "@material-ui/core";
import { AuthContextProvider } from "../src/context/AuthContextProvider";
import { ThemeContextProvider } from "../src/context/ThemeContextProvider";

export default function App() {
  return (
    <ThemeContextProvider>
      <AuthContextProvider>
        <Container className="App">
          <Container>
            <Main />
          </Container>
        </Container>
      </AuthContextProvider>
    </ThemeContextProvider>
  );
}
