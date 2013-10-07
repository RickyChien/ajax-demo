
/*
 * GET gas information.
 */

function genRandNum() {
  return Math.floor(Math.random() * 90000) + 10000;
}

exports.getGasPrice = function(req, res) {
  var data = {},
      i,
      dataNum;

  for (i = 1;  i <= 7; i++) {
    dataNum = 'data' + i;
    data[dataNum] = genRandNum();
  }

  return data;
};
