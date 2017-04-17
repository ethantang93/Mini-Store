products = require('../controllers/ProductController.js')
customers = require('../controllers/CustomersController.js')
orders = require('../controllers/OrdersController.js')
module.exports = function(app){
  app.get('/products', products.index);
  app.post('/product', products.create);
  app.delete('/product/:id',products.delete);

  app.get('/customers', customers.index);
  app.post('/customer', customers.create);
  app.delete('/customer/:id',customers.delete);
  
  app.get('/orders',orders.index);
  app.post('/order',orders.create);
}
