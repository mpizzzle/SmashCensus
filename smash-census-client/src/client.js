import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Archives from "./pages/Archives";
import Featured from "./pages/Featured";
import Layout from "./pages/Layout";
import AddProfile from "./pages/AddProfile";
import DeleteProfile from "./pages/DeleteProfile";
import Settings from "./pages/Settings";

const root = document.getElementById('root');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Featured}></IndexRoute>
      <Route path="archives(/:profile)" name="archives" component={Archives}></Route>
      <Route path="addProfile" name="addProfile" component={AddProfile}></Route>
      <Route path="delProfile" name="delProfile" component={DeleteProfile}></Route>
      <Route path="settings" name="settings" component={Settings}></Route>
    </Route>
  </Router>, root);
