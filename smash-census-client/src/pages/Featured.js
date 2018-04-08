import React from "react";

import Profile from "../components/Profile";

export default class Featured extends React.Component {
  constructor() {
    super();
    this.state = {profiles: []}
  }

  componentDidMount() {
    fetch('/profiles')
    .then(res => res.json())
    .then(profiles => this.setState({ profiles }));
}

  render() {
    const Profiles = this.state.profiles.map(profile => <Profile key={profile._id} title={profile.tag}/> );
    const randomAd = Math.round(Math.random() * 10) + 1;

    return (
      <div>
        <div class="row">
          <div class="col-lg-12">
            <div class="well text-center">
              Random Ad #{randomAd}
            </div>
          </div>
        </div>
        <div class="row">{Profiles}</div>
      </div>
    );
  }
}
