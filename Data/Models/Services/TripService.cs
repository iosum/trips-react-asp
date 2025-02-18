using System.Collections.Generic;
using System.Linq;

namespace Trips.Data {
    public class TripService : ITripService
    {
        public void AddTrip(Trip trip)
        {
           Data.Trips.Add(trip);
        }

        public void DeleteTrip(int tripId)
        {
            var trip = Data.Trips.FirstOrDefault(t => t.Id == tripId);
            if(trip != null) {
                Data.Trips.Remove(trip);
            }
        }

        public List<Trip> GetAllTrips()
        {
            return Data.Trips.ToList();
        }

        public Trip GetTripById(int tripId)
        {
            return Data.Trips.FirstOrDefault(t => t.Id == tripId);
             
        }

        public void UpdateTrip(int tripId, Trip trip)
        {
            var oldTrip = Data.Trips.FirstOrDefault(t => t.Id == tripId);
            if(oldTrip != null) {
                oldTrip.Name = trip.Name;
                oldTrip.Description = trip.Description;
                oldTrip.DateStarted = trip.DateStarted;
                oldTrip.DateCompleted = trip.DateCompleted;
            }
        }
    }
}