import React, { Component } from "react";
import axios from "axios";

export class Trips extends Component {
  // use props to pass data to the view
  constructor(props) {
    super(props);

    this.onTripUpdate = this.onTripUpdate.bind(this);
    this.onTripDelete = this.onTripDelete.bind(this);
    this.state = {
      // store a list of trips
      trips: [],
      // check if the data is loaded or not
      loading: true,
      // add an error state
      failed: false,
      error: ''
    };
  }

  // get the api endpoint, we are going to send a request to get all the trips once the views are loaded
  componentDidMount() {
    this.populateTripsData();
  }

  onTripUpdate(id) {
    const { history } = this.props;
    history.push("/update/" + id);
  }
  // add a delete method to the all trips view
  onTripDelete(id) {
    const { history } = this.props;
    history.push("/delete/" + id);
  }

  populateTripsData() {
    // send a get request to the api endpoint
    axios.get("api/Trips/GetTrips").then((result) => {
      // get all the trips from the data
      const response = result.data;
      // change the trip state to response, and close the loading
      this.setState({ trips: response, loading: false, failed: false, error: '' });
    })
    .catch(e => {
      this.setState({
        trips: [],
        loading: false,
        failed: true,
        error: "Trips couldn't be loaded."
      });

    });


    // change the state of the trips to that result
  }

  // use state to render the table
  renderAllTripsTable(trips) {
    return (
      <table className="table table-striped table-hover">
        <thead>
          <th>Name</th>
          <th>Description</th>
          <th>Date Started</th>
          <th>Date Completed</th>
          <th>Actions</th>
        </thead>
        <tbody>
          {
            // each table row needs an unique identifier so we need to set a key
            trips.map((trip) => (
              <tr key={trip.id}>
                <td>{trip.name}</td>
                <td>{trip.description}</td>
                {/* when we don't have a date, we need to display a dash */}
                <td>{new Date(trip.dateStarted).toISOString().slice(0, 10)}</td>
                {/* first check if we have a date, if yes, display the date, otherwise, display the dash */}
                <td>
                  {trip.dateCompleted
                    ? new Date(trip.dateCompleted).toISOString().slice(0, 10)
                    : "-"}
                </td>
                <td>
                  <div className="form-group">
                    {/* when clicking the update button, it will trigger the onClick method
                    and inside the onClick method, we will pass in the trip.id */}
                    <button
                      onClick={() => this.onTripUpdate(trip.id)}
                      className="btn btn-success"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => this.onTripDelete(trip.id)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    );
  }

  // a class based component always has a render method which returns the JSX
  render() {
    // if we haven't got any data yet, we don't want to display an empty table
    // if the state of the loading is true, meaning data haven't returned yet so we need to let the user know that the data is still loading
    // otherwise, we need to create a table to display the info
    let content = this.state.loading ? (
      <p>
        <em>Loading...</em>
      </p>
    ) : // check if there is an error
    this.state.failed ? (
      // display the error message
      <div className="text-danger">
        <em>{this.state.error}</em>
      </div>
    ) : (
      // pass the this.state.trips array
      this.renderAllTripsTable(this.state.trips)
    );
    

    return (
      <div>
        <h1>All trips</h1>
        {content}
      </div>
    );
  }
}
