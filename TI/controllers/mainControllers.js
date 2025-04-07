
const mainController={

  index:function(req, res) {
    res.render('index');
  },
  login: function(req, res) {
    res.render('login');
  },
  register: function(req, res) {
    res.render('register');
  },
  product: function(req, res) {
    res.render('product');
  },
  profile: function(req, res) {
    res.render('profile');
  },
  productAdd: function(req, res) {
    res.render('product-add');
  },
  searchResults: function(req, res) {
    res.render('search-results');
  },
}

module.exports = mainController