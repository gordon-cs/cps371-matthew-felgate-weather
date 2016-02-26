//got this with help from adam
app.service("weatherService", function ($http) {

    var API_KEY = "06b637206b545d428d0fc45034d26c69"; // INSERT API KEY HERE
    var COORDS = {
      lat: "42.6042", // INSERT LATITUDE HERE
      long: "-70.8868" // INSERT LONGITUDE HERE
    };
    //var URL = "https://api.forecast.io/forecast/" +
      //        API_KEY + "/" + COORDS.lat + "," + COORDS.long +  "?callback=JSON_CALLBACK"; // Request JSON-P response
    var URL = 'http://matthew-felgate-server.appspot.com/?';

    this.get = function () {
        return $http.get(URL);
    };
});
