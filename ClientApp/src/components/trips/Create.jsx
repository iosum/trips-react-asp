import React, {Component} from 'react';
// to use the http request
import axios from 'axios';

export class Create extends Component {
    constructor(props) {
        super(props);
        
        // in order to use the onChangeName, we need to configure the method in the constructor to use it /// in the html code
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeDateStarted = this.onChangeDateStarted.bind(this);
        this.onChangeDateCompleted = this.onChangeDateCompleted.bind(this);

        // configure the onSubmit method
        this.onSubmit = this.onSubmit.bind(this);


        // have a form where we have 4 fields and use these fields to send object to the api
        // so we need to create the initial state of these fields
        this.state = {
            name: '',
            description: '',
            dateStarted: null,
            dateCompleted: null
        }
    }

    onChangeName(e) {
        // set the state
        this.setState({
            name: e.target.value
        });
    }

    onChangeDescription(e) {
        // set the state
        this.setState({
            description: e.target.value
        });
    }

    onChangeDateStarted(e) {
        // set the state
        this.setState({
            dateStarted: e.target.value
        });
    }

    onChangeDateCompleted(e) {
        // set the state
        this.setState({
            dateCompleted: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const {history} = this.props;

        // create a new trip object
        let trip = {
            Id: Math.floor(Math.random() * 1000),
            name: this.state.name,
            description: this.state.description,
            dateStarted: this.state.dateStarted,
            dateCompleted: this.state.dateCompleted
        }
        // use the axios library to send an http post request
        axios.post("api/Trips/AddTrip", trip)
            .then(result => {
                // redirect the user to the AllTrips
                history.push('/trips');
            })
    }


    // we have a class so we need to have a render method
    // and inside the render method, we need to have a return
    render() {
        return(
            // write the html code
            <div className="trip-form" >
                <h3>Add new trip</h3>
                {/* if we click the submit button, we need to submit a request */}
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Trip name:  </label>
                        <input
                            type="text"
                            className="form-control"
                                // tie the inputs field to the state fields, so we need to set the new property to the new input field
                            value={this.state.name}
                            // we need to add the onChange event, so when the user changes the value of an input field, that value is reflected to our state
                            onChange={this.onChangeName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Trip description: </label>
                        <textarea
                            type="text"
                            className="form-control"
                            value={this.state.description}
                            onChange={this.onChangeDescription}
                        />
                    </div>
                    <div className="row">
                        <div className="col col-md-6 col-sm-6 col-xs-12">
                            <div className="form-group">
                                <label>Date of start:  </label>
                                <input
                                    type="date"
                                    className="form-control"
                                    value={this.state.dateStarted}
                                    onChange={this.onChangeDateStarted}
                                />
                            </div>
                        </div>
                        <div className="col col-md-6 col-sm-6 col-xs-12">
                            <div className="form-group">
                                <label>Date of completion:  </label>
                                <input
                                    type="date"
                                    className="form-control"
                                    value={this.state.dateCompleted}
                                    onChange={this.onChangeDateCompleted}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Add trip" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}