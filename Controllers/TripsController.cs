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
    }
}