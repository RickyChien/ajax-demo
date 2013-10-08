
/*
 * GET ajax demo home page.
 */

var user = require("./user");

exports.index = function(req, res) {
  var page = req.query.page || 1,
      limit = req.query.limit || 10,
      begin = (page - 1) * 10,
      end = (page - 1) * 10 + 10;

  res.render('ajaxDemo', {
    title: 'AjaxDemo',
    query: 'ajaxDemo',
    pages: { current: parseInt(page), total: user.count(limit) },
    users: user.list(begin, end)
  });
};
