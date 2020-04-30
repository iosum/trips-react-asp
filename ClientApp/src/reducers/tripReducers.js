// import all the actions
import {
    GET_ALL_TRIPS_REQUEST,
    GET_ALL_TRIPS_SUCCESS,
    GET_ALL_TRIPS_ERROR
} from '../actions/tripActions'

// define the initial state of the app
const INITIAL_STATE = {
    loading: false,
    hasError: false,
    error: null,
    data: []
}

export default (state = INITIAL_STATE, action) => {
    // check the action type, we can see that in the tripActions, we define a type
    switch (action.type) {
        case GET_ALL_TRIPS_REQUEST:
            return {
                ...state,
                loading: true
            };
        case GET_ALL_TRIPS_SUCCESS:
            return {
                ...state,
                // cause we now have a response
                loading: false,
                hasError: false,
                data: action.payload
            };
        case GET_ALL_TRIPS_ERROR:
            return {
                ...state,
                loading: false,
                hasError: true,
                error: action.payload
            };

        default:
            return state;

    }
}







