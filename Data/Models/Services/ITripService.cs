using System.Collections.Generic;

namespace  Trips.Data {
    public interface ITripService
    {
        // get the list of all trips
        List<Trip> GetAllTrips();

        // get a single trip
        Trip GetTripById(int tripId);

        // update a trip
        void UpdateTrip(int tripId, Trip trip);

        // delete a trip
        void DeleteTrip(int tripId);

        // add a trip into the trip collection
        void AddTrip(Trip trip);
    }
}