import axios from 'axios';

// define the constants that we will use to send the request
export const GET_ALL_TRIPS_REQUEST = 'GET_ALL_TRIPS_REQUEST';
export const GET_ALL_TRIPS_SUCCESS = 'GET_ALL_TRIPS_SUCCESS';
export const GET_ALL_TRIPS_ERROR = 'GET_ALL_TRIPS_ERROR';

// create 2 actions
const getTripsSuccess = payload => ({
    type: GET_ALL_TRIPS_SUCCESS,
    payload
});

const getTripsError = payload => ({
    type: GET_ALL_TRIPS_ERROR,
    payload
})

export const getAllTrips = () => dispatch => {
    // dispatch the request
    dispatch({type: GET_ALL_TRIPS_REQUEST});
    return axios.get('api/Trips/GetTrips')
    // if it is a successful response, we need to have a successful action
    .then((res) => {
        const response = res.data;
        // the response will be a payload
        dispatch(getTripsSuccess(response));
    })
    .catch(err => {
        dispatch(getTripsError("something went wrong!"));
        // return promise w/ an empty object
        return Promise.reject({});
    }) 
}