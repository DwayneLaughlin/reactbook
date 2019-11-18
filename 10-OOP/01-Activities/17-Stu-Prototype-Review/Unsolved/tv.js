const axios = require("axios");
const fs = require("fs");

// Create the TV constructor
const TV = function(actor) {
  const actorURL = "http://api.tvmaze.com/search/people?q=" + actor

  axios.get(actorURL).then(function(answers){
    
  })
};

// Find a tv show actor
TV.prototype.findActor = function()

// Find a tv show
TV.prototype.findShow = function(show) {
  const URL = "http://api.tvmaze.com/singlesearch/shows?q=" + show;

  axios.get(URL).then(function(response) {
    const showData = [
      "Show: " + response.data.person.name,
      "Genre(s): " + response.data.genres.join(", "),
      "Rating: " + response.data.rating.average,
      "Network: " + response.data.network.name,
      "Summary: " + response.data.summary,
      "-".repeat(60)
    ].join("\n\n");

    fs.appendFile("log.txt", showData, err => {
      if (err) throw err;

      console.log(showData);
    });
  });
};

module.exports = TV;
