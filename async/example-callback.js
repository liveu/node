/**
 * Created by shchoi on 2015-11-23.
 */

//var weatherUrl = 'http://api.openweathermap.org/data/2.5/find?q=Philadelphia&units=imperial&appid=2de143494c0b295cca9337e1e96b00e0';
var weather = require('./weather.js');

var body = weather(function(currentWeather){
    console.log(currentWeather);
});



