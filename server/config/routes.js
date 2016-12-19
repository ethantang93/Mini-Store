products = require('../controllers/ProductController.js')
users = require('../controllers/CustomersController.js')
orders = require('../controllers/OrdersController.js')
module.exports = function(app){
  app.get('/products', products.index);
  app.post('/product', products.create);
  app.delete('/product/:id',products.delete);
  app.get('/users', users.index);
  app.post('/user', users.create);
  app.delete('/user/:id',users.delete);
  app.get('/orders',orders.index);
  app.post('/order',orders.create);
}
