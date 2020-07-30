import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>

        {/* <Route path="/addmovie">
          <AddMovieForm />
        </Route> */}

        {/* <Route path="/video">
          <VideoPlayer />
        </Route> */}

        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
