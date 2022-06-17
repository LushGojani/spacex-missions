import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import PageHeader from "../components/UI/Header/PageHeader";

import Home from "../pages/Home";
import Rocket from "../pages/Rocket";
const Routing = () => {
  return (
    <React.Fragment>
      <PageHeader />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/rocket/:rocketId" exact>
          <Rocket />
        </Route>
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </React.Fragment>
  );
};

export default Routing;
