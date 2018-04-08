import React from "react";

import Profile from "../components/Profile";

export default class DeleteProfile extends React.Component {
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
      "Delete Profile",
    ].map((title, i) => <Profile key={i} title={title}/> );

    return (
      <div>
        <h1>Delete Profile</h1>
        <div class="row">{Profiles}</div>
      </div>
    );
  }
}
