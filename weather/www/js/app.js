var app = angular.module('weather', ['ionic']);


app.controller('HomeCtrl', function($scope, weatherService) {

  

  weatherService.get().then(function(response) {


//got this idea from stack overflow but couldn't find the link
    var monthNames = [
      "January", "February", "March",
      "April", "May", "June", "July",
      "August", "September", "October",
      "November", "December"
    ];

    var days = [
      'Sunday', 'Monday', 'Tuesday', 'Wednesday',
      'Thursday', 'Friday', 'Saturday'
    ];



    //w3school website
    var currentTime = new Date();
    var hour = currentTime.getHours();
    var numDay = currentTime.getDate();
    var day = currentTime.getDay();
    var monthIndex = currentTime.getMonth();
    var fullDate = (numDay + ", " + monthNames[monthIndex]);

    console.log(day);

    function time(x) {
      var newTime = x + hour;
      if (newTime > 12) {
        newTime = newTime - 12;
        if (newTime > 12) {
          newTime = newTime - 12;
          return (newTime) + "am";
        } else {
          return (newTime) + "pm";
        }

      } else {
        return (newTime) + "am";
      }

    }
    // got the idea from stack overflow: http://stackoverflow.com/questions/14657378/how-to-set-x-number-of-days-in-the-future-using-javascript

    function dayOfTheWeek(x) {
      var addDay = x + day;
      if (addDay > 6) {
        addDay = addDay - 6;
      }
      var newDay = days[addDay];
      return (newDay);
    }
    console.log(dayOfTheWeek(6));


    $scope.currentDate = fullDate;


    $scope.weather = response.data;
    console.log($scope.weather);
    $scope.icon = $scope.weather.currently.icon;
    $scope.currentTemp = Math.round($scope.weather.currently.temperature);
    $scope.precipProbability = Math.round($scope.weather.currently.precipProbability);
    $scope.humidity = Math.round($scope.weather.currently.humidity);
    $scope.windSpeed = Math.round($scope.weather.currently.windSpeed);
    $scope.summary = String($scope.weather.currently.summary);

    $scope.hour1 = time(1) + ", " + Math.round($scope.weather.hourly.data[1].temperature) + "°F and " +
      $scope.weather.hourly.data[1].summary;
    $scope.hour2 = time(2) + ", " + Math.round($scope.weather.hourly.data[2].temperature) + "°F and " +
      $scope.weather.hourly.data[2].summary;
    $scope.hour3 = time(3) + ", " + Math.round($scope.weather.hourly.data[3].temperature) + "°F and " +
      $scope.weather.hourly.data[3].summary;
    $scope.hour4 = time(4) + ", " + Math.round($scope.weather.hourly.data[4].temperature) + "°F and " +
      $scope.weather.hourly.data[4].summary;
    $scope.hour5 = time(5) + ", " + Math.round($scope.weather.hourly.data[5].temperature) + "°F and " +
      $scope.weather.hourly.data[5].summary;
    $scope.hour6 = time(6) + ", " + Math.round($scope.weather.hourly.data[6].temperature) + "°F and " +
      $scope.weather.hourly.data[6].summary;
    $scope.hour7 = time(7) + ", " + Math.round($scope.weather.hourly.data[1].temperature) + "°F and " +
      $scope.weather.hourly.data[7].summary;
    $scope.hour8 = time(8) + ", " + Math.round($scope.weather.hourly.data[2].temperature) + "°F and " +
      $scope.weather.hourly.data[8].summary;
    $scope.hour9 = time(9) + ", " + Math.round($scope.weather.hourly.data[3].temperature) + "°F and " +
      $scope.weather.hourly.data[9].summary;
    $scope.hour10 = time(10) + ", " + Math.round($scope.weather.hourly.data[4].temperature) + "°F and " +
      $scope.weather.hourly.data[10].summary;
    $scope.hour11 = time(11) + ", " + Math.round($scope.weather.hourly.data[5].temperature) + "°F and " +
      $scope.weather.hourly.data[11].summary;
    $scope.hour12 = time(12) + ", " + Math.round($scope.weather.hourly.data[6].temperature) + "°F and " +
      $scope.weather.hourly.data[12].summary;

    $scope.day1 = dayOfTheWeek(1) + ", " + Math.round($scope.weather.daily.data[1].temperatureMax) + "°F and " +
      $scope.weather.daily.data[1].summary;
    $scope.day2 = dayOfTheWeek(2) + ", " + Math.round($scope.weather.daily.data[2].temperatureMax) + "°F and " +
      $scope.weather.daily.data[2].summary;
    $scope.day3 = dayOfTheWeek(3) + ", " + Math.round($scope.weather.daily.data[3].temperatureMax) + "°F and " +
      $scope.weather.daily.data[3].summary;
    $scope.day4 = dayOfTheWeek(4) + ", " + Math.round($scope.weather.daily.data[4].temperatureMax) + "°F and " +
      $scope.weather.daily.data[4].summary;
    $scope.day5 = dayOfTheWeek(5) + ", " + Math.round($scope.weather.daily.data[5].temperatureMax) + "°F and " +
      $scope.weather.daily.data[5].summary;
    $scope.day6 = dayOfTheWeek(6) + ", " + Math.round($scope.weather.daily.data[6].temperatureMax) + "°F and " +
      $scope.weather.daily.data[6].summary;
    $scope.day7 = dayOfTheWeek(7) + ", " + Math.round($scope.weather.daily.data[7].temperatureMax) + "°F and " +
      $scope.weather.daily.data[7].summary;


//adam helped me get this working
    $scope.currentPicture = "img/" + $scope.icon + ".png";
    $scope.hour1pic = "img/" + $scope.weather.hourly.data[1].icon + ".png";
    $scope.hour2pic = "img/" + $scope.weather.hourly.data[2].icon + ".png";
    $scope.hour3pic = "img/" + $scope.weather.hourly.data[3].icon + ".png";
    $scope.hour4pic = "img/" + $scope.weather.hourly.data[4].icon + ".png";
    $scope.hour5pic = "img/" + $scope.weather.hourly.data[5].icon + ".png";
    $scope.hour6pic = "img/" + $scope.weather.hourly.data[6].icon + ".png";
    $scope.hour7pic = "img/" + $scope.weather.hourly.data[7].icon + ".png";
    $scope.hour8pic = "img/" + $scope.weather.hourly.data[8].icon + ".png";
    $scope.hour9pic = "img/" + $scope.weather.hourly.data[9].icon + ".png";
    $scope.hour10pic = "img/" + $scope.weather.hourly.data[10].icon + ".png";
    $scope.hour11pic = "img/" + $scope.weather.hourly.data[11].icon + ".png";
    $scope.hour12pic = "img/" + $scope.weather.hourly.data[12].icon + ".png";

    $scope.day1pic = "img/" + $scope.weather.daily.data[1].icon + ".png";
    $scope.day2pic = "img/" + $scope.weather.daily.data[2].icon + ".png";
    $scope.day3pic = "img/" + $scope.weather.daily.data[3].icon + ".png";
    $scope.day4pic = "img/" + $scope.weather.daily.data[4].icon + ".png";
    $scope.day5pic = "img/" + $scope.weather.daily.data[5].icon + ".png";
    $scope.day6pic = "img/" + $scope.weather.daily.data[6].icon + ".png";
    $scope.day7pic = "img/" + $scope.weather.daily.data[7].icon + ".png";


  }, function(error) {
    console.error("Error getting data!");
  });


});
