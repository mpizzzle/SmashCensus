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
    this.state.profiles.map(profile => <Profile key={profile} title={profile}/> );

    const adText = [
      "Ad spot #1",
      "Ad spot #2",
      "Ad spot #3",
      "Ad spot #4",
      "Ad spot #5",
    ];

    const randomAd = adText[Math.round( Math.random() * (adText.length-1) )];
    return (
      <div>
        <div class="row">
          <div class="col-lg-12">
            <div class="well text-center">
              {randomAd}
            </div>
          </div>
        </div>

        <div class="row">{this.state.profiles.map(profile => profile.tag)}</div>
      </div>
    );
  }
}
