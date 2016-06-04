using System.Collections.Generic;
using System.Net.Http;
using Crokus.match_predictions.Models;
using Microsoft.AspNetCore.Mvc;

namespace Crokus.match_predictions.Controllers
{
    [Route("api/[controller]")]
    public class PredictionsController : Controller
    {
        private readonly HttpClient _client = new HttpClient();

        // GET api/values
        [HttpGet]
        public IEnumerable<string> Get(MatchParameters parameters)
        {
            // TODO: Create Predictive endpoint
            return null;
        }
    }
}