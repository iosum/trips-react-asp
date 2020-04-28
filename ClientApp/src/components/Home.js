import React, { Component } from 'react';

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <div>
        <h1>Welcome to Trips Managers</h1>
        <p>Use this manager to manage you trips by</p>
        <ul>
          <li>Add a new Trip</li>
          <li>Update a new Trip</li>
          <li>Delete a Trip</li>
          <li>Show all Trips</li>
        </ul>
        <p>Source code can be found at : <a href="https://github.com/iosum/trips-react-asp">https://github.com/iosum/trips-react-asp</a></p>
        <p>This site uses React, Bootstrap, and Asp.Net Core to build this page.</p>
      </div>
    );
  }
}
