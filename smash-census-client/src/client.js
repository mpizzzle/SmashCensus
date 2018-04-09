import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import ProfilesPage from "./pages/ProfilesPage";
import Layout from "./pages/Layout";
import AddProfilePage from "./pages/AddProfilePage";
import DeleteProfilePage from "./pages/DeleteProfilePage";
import SettingsPage from "./pages/SettingsPage";

//take a look at index.html to see where this 'root' element is
//that is where the ReactDOM gets injected
const root = document.getElementById('root');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={ProfilesPage}></IndexRoute>
      <Route path="addProfile" name="addProfile" component={AddProfilePage}></Route>
      <Route path="delProfile" name="delProfile" component={DeleteProfilePage}></Route>
      <Route path="settings" name="settings" component={SettingsPage}></Route>
    </Route>
  </Router>, root);
