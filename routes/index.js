
/*
 * GET home page.
 */

var gas = require("./gas");

exports.index = function(req, res) {
  res.render('index', {
    title: 'Data Query',
    data: gas.getGasPrice()
  });
};