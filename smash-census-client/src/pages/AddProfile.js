import React from "react";

import Profile from "../components/Profile";

export default class AddProfile extends React.Component {
  render() {
    const { query } = this.props.location;
    const { params } = this.props;
    const { profile } = params;
    const { date, filter } = query;

    const Profiles = [
      "Some Profile",
      "Some Other Profile",
      "Yet Another Profile",
      "Still More",
      "Fake Profile",
      "Partial Profile",
      "American Profile",
      "Add Profile",
    ].map((title, i) => <Profile key={i} title={title}/> );

    return (
      <div>
        <h1>AddProfile</h1>
        <div class="row">{Profiles}</div>
      </div>
    );
  }
}
