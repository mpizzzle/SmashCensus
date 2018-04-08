import React from "react";

import Profile from "../components/Profile";

export default class DeleteProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {tag: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({tag: event.target.value});
  }

  handleSubmit(event) {
    fetch('/deleteprofile', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state)
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Delete Profile</h1>
        <label>
          Tag:
          <input type="text" value={this.state.tag} onChange={this.handleChange} />
        </label>
        <br/>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
