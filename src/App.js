import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AdminHome from "./AdminHome";
import Home from "./Home";

export default class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/" exact component={Home}></Route>
          <Route path="/admin/home" exact component={AdminHome}></Route>
        </div>
      </BrowserRouter>
    )
  }
}
