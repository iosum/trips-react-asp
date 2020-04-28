import React, {Component} from 'react';

export class Create extends Component {
    constructor(props) {
        super(props);

        // have a form where we have 4 fields and use these fields to send object to the api
        // so we need to create the initial state of these fields
        this.state = {
            name: '',
            description: '',
            dateStarted: null,
            dateCompleted: null
        }
    }

    // we have a class so we need to have a render method
    // and inside the render method, we need to have a return
    render() {
        return(
            // write the html code
            <div className="trip-form" >
                <h3>Add new trip</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Trip name:  </label>
                        <input
                            type="text"
                            className="form-control"
                        />
                    </div>
                    <div className="form-group">
                        <label>Trip description: </label>
                        <textarea
                            type="text"
                            className="form-control"
                        />
                    </div>
                    <div className="row">
                        <div className="col col-md-6 col-sm-6 col-xs-12">
                            <div className="form-group">
                                <label>Date of start:  </label>
                                <input
                                    type="date"
                                    className="form-control"
                                />
                            </div>
                        </div>
                        <div className="col col-md-6 col-sm-6 col-xs-12">
                            <div className="form-group">
                                <label>Date of completion:  </label>
                                <input
                                    type="date"
                                    className="form-control"
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