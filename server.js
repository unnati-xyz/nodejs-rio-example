var rio = require("rio");
var bodyParser = require("body-parser");
var express = require("express");

var app = express();

// API endpoint
app.get("/diamond-details", function(req, res) {

  console.log("sample size requested is "+ req.query.n);

  rio.e({
    filename: "diamonds.R",
    entrypoint: "getSampleDetails",
    data: {
     sample_size:  req.query.n
    },
    callback: function(err, data) {
      console.log("Data received from R");
      console.log(data);
      res.send(data);
    }
  });
});


app.listen(9000, "0.0.0.0", function() {
  console.log("Diamonds server is up ...");
});

