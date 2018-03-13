import React from "react";

import Profile from "../components/Profile";

export default class Featured extends React.Component {
  render() {
    const Profiles = [
      "Some Profile",
      "Some Other Profile",
      "Yet Another Profile",
      "Still More",
      "Some Profile",
      "Some Other Profile",
      "Yet Another Profile",
      "Still More",
      "Some Profile",
      "Some Other Profile",
      "Yet Another Profile",
      "Still More",
    ].map((title, i) => <Profile key={i} title={title}/> );

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

        <div class="row">{Profiles}</div>
      </div>
    );
  }
}
