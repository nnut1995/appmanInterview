const cryptoDetails = async (symbols = []) => {
  var request = require('request');
  inputArray.forEach(function(data) {
    request('https://coinbin.org/' + data, function (error, response, body) {
    console.log(body)
  });
});
}
};

module.exports = { cryptoDetails };
