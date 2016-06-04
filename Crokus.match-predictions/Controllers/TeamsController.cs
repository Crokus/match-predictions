using System.Collections.Generic;
using System.Net.Http;
using Crokus.match_predictions.Models;
using Microsoft.AspNetCore.Mvc;

namespace Crokus.match_predictions.Controllers
{
    [Route("api/[controller]")]
    public class TeamsController : Controller
    {
        private readonly HttpClient _client = new HttpClient();

        // GET api/values
        [HttpGet]
        public IEnumerable<string> Get(MatchParameters parameters)
        {
            return new List<string>
            {
                "France",
                "Switzerland",
                "Romania",
                "Albania",
                "England",
                "Russia",
                "Slovakia",
                "Wales",
                "Germany",
                "Poland",
                "Ukraine",
                "North. Ireland",
                "Spain",
                "Croatia",
                "Czech Republic",
                "Turkey",
                "Italy",
                "Belgium",
                "Sweden",
                "Ireland",
                "Portugal",
                "Austria",
                "Iceland",
                "Hungary"
            };
        }
    }
}