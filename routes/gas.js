
/*
 * GET gas information.
 */

var http = require("http");
var options = {
  host: 'gas.goodlife.tw',
  path: '/gas.json'
};

var getJSON = function(options, onResult) {
  var req = http.request(options, function(res) {
    var output = '';
    console.log(options.host + ':' + res.statusCode);
    res.setEncoding('utf8');

    res.on('data', function (chunk) {
      output += chunk;
    });

    res.on('end', function() {
      var data = JSON.parse(output);
      onResult(res.statusCode, data);
    });
  });

  req.on('error', function(err) {
    res.send('error: ' + err.message);
  });

  req.end();
};

exports.getPrice = function(req, res) {
  getJSON(options, function(statusCode, data) {
    res.send(data);
  });
};
