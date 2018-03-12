import React, { Component } from 'react';

class Layout extends Component {
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
    return (
      <div className="Layout">
        <h1>Profiles</h1>
        <ul>
          {this.state.profiles.map(profile =>
            <li key={profile._id}>{profile.tag}</li>
          )}
        </ul>
      </div>
    );
  }
}

export default Layout;
