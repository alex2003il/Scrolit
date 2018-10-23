const ProductCategory = require('../models').ProductCategory;

module.exports = {
  create(req, res) {
    return ProductCategory
      .findOrCreate({
        where: { name: req.body.name }
      })
      .then(productCategory => res.status(201).send(productCategory[0]))
      .catch(error => res.status(400).send(error));
  },
  list(req, res) {
    return ProductCategory
    .findAll()
      .then(productCategory => res.status(200).send(productCategory))
      .catch(error => res.status(400).send(error));
  },
  destroy(req, res) {
    return ProductCategory
      .findById(req.params.categoryId)
      .then(productCategory => {
        if (!productCategory) {
          return res.status(400).send({
            message: 'ProductCategory Not Found',
          });
        }
        return ProductCategory
          .destroy()
          .then(() => res.status(200).send({ message: 'Todo deleted successfully.' }))
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },

};