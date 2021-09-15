import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./Home";
import Movie from "./SingleMovie";
import Error from "./Error";

function App() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/movies/:id" children={<Movie />} />
      <Route path="*" exact component={Error} />
    </Switch>
  );
}

export default App;
