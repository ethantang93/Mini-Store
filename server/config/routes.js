products = require('../controllers/ProductController.js')
module.exports = function(app){
  app.get('/products', products.index);
  app.post('/product', products.create);
}
