using Microsoft.AspNetCore.Mvc;
using Trips.Data;

namespace Trips.Controllers {

    [Route("api/[controller]")]
    public class TripsController : Controller {

        private ITripService _service;

        // create a constructor so we can inject the ITripSerice that can use it in our endpoint
        public TripsController(ITripService service)
        {
            _service = service;
        }

        // to add a new trip, we need to send an http post request
        // FromBody: send our trip object from our body
        [HttpPost("AddTrip")]
        public IActionResult AddTrip([FromBody] Trip trip) {
            // check if the trip is null
            if(trip != null) {
                _service.AddTrip(trip);
            }
            return Ok();
        }

        [HttpGet("SingleTrip/{id}")]
        public IActionResult GetTripById(int id) {
            var trip = _service.GetTripById(id);
            return Ok(trip);
        }

        // get the list of trips
        [HttpGet("[Action]")]
        public IActionResult GetTrips() {
            var allTrips = _service.GetAllTrips();
            // return all trips
            return Ok(allTrips);
        }

        [HttpPut("UpdateTrip/{id}")]
        public IActionResult UpdateTrip(int id, [FromBody] Trip trip) {
            _service.UpdateTrip(id, trip);
            return Ok(trip);
        }

        [HttpDelete("DeleteTrip/{id}")]
        public IActionResult DeleteTrip(int id) {
            _service.DeleteTrip(id);
            return Ok();
        }
    }
}