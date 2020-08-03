import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import PageNotFound from "./pages/PageNotFound";
import Home from "./pages/Home";
import AddMovie from "./pages/AddMovie";

const defaultTheme = {
  color: "var(--primary_color)",
  bg: "var(--primary_bg)",
  dark: "var(--dark)",
};

function App({ theme }) {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme ? theme : defaultTheme}>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/addmovie">
            <AddMovie />
          </Route>

          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
