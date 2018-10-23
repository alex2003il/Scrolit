const usersController = require('../controllers').users;
const productCategoriesController = require('../controllers').productCategories;
const postsController = require('../controllers').posts;

module.exports = (app) => {
  app.get('/db', (req, res) => res.status(200).send({
    message: 'Welcome to the Users API!',
  }));


  //name
  //password
  
  app.post('/db/users', usersController.create);
  app.get('/db/users', usersController.list);
  app.get('/db/users/:userId', usersController.retrieve);
  app.put('/db/users/:userId', usersController.update);
  app.delete('/db/users/:userId', usersController.destroy);
  
// image 
// description
  app.post('/db/posts/:userId/:categoryId', postsController.create);
  app.get('/db/posts', postsController.list);
  app.get('/db/posts/:userId', postsController.retrieve);
  app.put('/db/posts/:userId/:postId', postsController.update);
  app.delete('/db/posts/:userId/:postId', postsController.destroy);


//name
  app.post('/db/categories', productCategoriesController.create);
  app.get('/db/categories', productCategoriesController.list);
  app.delete('/db/categories/:categoryId', productCategoriesController.destroy);




};