const User = require('../models').User;
const Post = require('../models').Post;
const UserMeta = require('../models').UserMeta;

module.exports = {
  create(req, res) {
    return User
      .create({
        name: req.body.name,
        password: req.body.password,
        metadata: req.body.metadata
      })
      .then(user => res.status(201).send(user))
      .catch(error => res.status(400).send(error));
  },
  list(req, res) {
    return User
    .findAll({
        attributes: { exclude: ['password'] },
        include: [{
          model: Post,
          as: 'posts',
        },
        {
            model: UserMeta,
            as: 'metadata',
        }],
      })
      .then(user => res.status(200).send(user))
      .catch(error => res.status(400).send(error));
  },
  retrieve(req, res) {
    return User
      .findById(req.params.userId, {
        attributes: { exclude: ['password'] },
        include: [{
          model: Post,
          as: 'posts',
        },
        {
            model: UserMeta,
            as: 'metadata',
        }],
      })
      .then(user => {
        if (!user) {
          return res.status(404).send({
            message: 'User Not Found',
          });
        }
        return res.status(200).send(user);
      })
      .catch(error => res.status(400).send(error));
  },
  update(req, res) {
    return User
      .findById(req.params.userId)
      .then(user => {
        if (!user) {
          return res.status(404).send({
            message: 'User Not Found',
          });
        }
        return user
          .update({
            name: req.body.name || user.name,
            password: req.body.password || user.password,
          })
          .then(() => res.status(200).send(user))  // Send back the updated user.
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
  destroy(req, res) {
    return User
      .findById(req.params.userId)
      .then(user => {
        if (!user) {
          return res.status(400).send({
            message: 'User Not Found',
          });
        }
        return user
          .destroy()
          .then(() => res.status(200).send({ message: 'User deleted successfully.' }))
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },

};