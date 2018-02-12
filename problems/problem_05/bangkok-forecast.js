const bangkokForecast = async () => {
  var request = require('request');
  request('api.openweathermap.org/data/2.5/forecast/daily?id={1609350}&cnt={7}', function (error, response, body) {
  console.log(body)
  });
};

console.log(bangkokForecast())
module.exports = { bangkokForecast };
