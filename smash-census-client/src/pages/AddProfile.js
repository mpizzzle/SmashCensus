import React from "react";

import Profile from "../components/Profile";

export default class AddProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {tag: '', firstName: '', surname: '', region: '', main: '', secondary: ''};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    fetch('/postprofile', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state)
    });
  }

  render() {
    return (
        <div>
          <h1>Add Profile</h1>
          <label>
            Tag: <input type="text" name="tag" value={this.state.tag} onChange={this.handleChange} />
            </label>
          <br/>
          <label>
            First Name: <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange} />
          </label>
          <br/>
          <label>
            Surname: <input type="text" name="surname" value={this.state.surname} onChange={this.handleChange} />
          </label>
          <br/>
          <label>
            Region: <input type="text" name="region" value={this.state.region} onChange={this.handleChange} />
          </label>
          <br/>
          <label>
            Main: <input type="text" name="main" value={this.state.main} onChange={this.handleChange} />
          </label>
          <br/>
          <label>
            Secondary: <input type="text" name="secondary" value={this.state.secondary} onChange={this.handleChange} />
          </label>
          <br/>
          <a class="btn btn-default" href="#" onClick={this.handleSubmit.bind(this)}>Submit</a>
        </div>
    );
  }
}
