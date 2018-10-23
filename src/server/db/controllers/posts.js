const Post = require('../models').Post;

module.exports = {
  create(req, res) {
    return Post
      .create({
        image: req.body.image,
        description: req.body.description,
        categoryId: req.params.categoryId,
        userId: req.params.userId,
      })
      .then(post => res.status(201).send(post))
      .catch(error => res.status(400).send(error));
  },
  list(req, res) {
    return Post
    .findAll()
      .then(post => res.status(200).send(post))
      .catch(error => res.status(400).send(error));
  },
  retrieve(req, res) {
    return Post
    .findAll({
        where: {
            userId: req.params.userId
        }
      })
      .then(post => {
        if (!post) {
          return res.status(404).send({
            message: 'User Not Found',
          });
        }
        return res.status(200).send(post);
      })
      .catch(error => res.status(400).send(error));
  },
  update(req, res) {
    return Post
    .findAll({
        where: {
            userId: req.params.userId
        }
      })
      .findById(req.params.postId)
      .then(post => {
        if (!post) {
          return res.status(404).send({
            message: 'Post Not Found',
          });
        }
        return post
          .update({
            image: req.body.image || post.image,
            password: req.body.description || post.description,
          })
          .then(() => res.status(200).send(post))  // Send back the updated user.
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
  destroy(req, res) {
    return Post
    .findAll({
        where: {
            userId: req.params.userId
        }
      })
      .findById(req.params.postId)
      .then(post => {
        if (!post) {
          return res.status(400).send({
            message: 'Post Not Found',
          });
        }
        return post
          .destroy()
          .then(() => res.status(200).send({ message: 'Post deleted successfully.' }))
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },
};