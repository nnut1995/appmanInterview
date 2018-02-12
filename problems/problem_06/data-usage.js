var readline = require('readline');
var fs = require('fs');
const { readFileSync } = require('fs');
const logFilePath = __dirname + '/data-usage.log';

const raw = readFileSync(logFilePath, 'utf8');

const dataUsage = () => {
  var answer = []
  ans = [ { username: 'user03', total: 0, count: 0},
  { username: 'user01', total: 0, count: 0},
  { username: 'user02', total: 0, count: 0} ]
  var myInterface = readline.createInterface({
  input: fs.createReadStream(logFilePath)
});
  var lineno = 0;
  myInterface.on('line', function (line) {
    var array = line.split(',')
    var user = array[1].split('=')[1]
    var data = parseInt(array[2].split('=')[1]);
    ans.forEach(function(arrayElement) {
      if (user == arrayElement.username){
        arrayElement.total += data
        arrayElement.count += 1
      }
    lineno += 1
    if (lineno == 327){
      console.log(ans)
    }
    });
});
}

dataUsage()
module.exports = { dataUsage };
