import React from 'react';
import { Link } from "react-router";

import Nav from "../components/Nav";

export default class Layout extends React.Component {
  render() {
    const { location } = this.props;
    const containerStyle = {
      marginTop: "60px"
    };
    console.log("layout");
    return (
      <div className="Layout">
        <Nav location={location} />
        <div class="container" style={containerStyle}>
          <div class="row">
            <div class="col-lg-12">
              <h1>SmashCensus.net</h1>
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
