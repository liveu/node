/**
 * Created by shchoi on 2015-11-23.
 */
var weatherUrl = 'http://api.openweathermap.org/data/2.5/find?q=Philadelphia&units=imperial&appid=2de143494c0b295cca9337e1e96b00e0';
var request = require('request');

module.exports =  function(callback){
    request({
        url : weatherUrl,
        json : true
    }, function(error, response, body){
        if(error){
            callback('Unable to fetch weather.');
        }else{
            callback(JSON.stringify(body, null, 4)); //Get Full Json data
            callback(body.list[0].name);
        }
    });
}