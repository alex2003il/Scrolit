const UserMeta = require('../models').UserMeta;

module.exports = {
  create(req, res) {
    return UserMeta
      .findOrCreate({  
            where: {
                userId:req.params.userId
            },
            defaults: {
                profilePic: req.body.profilePic,
                details: req.body.details,
                instagram: req.body.instagram,
                facebook: req.body.facebook,
                twitter: req.body.twitter,
            }
            
        })
      .then(userMeta => res.status(201).send(userMeta))
      .catch(error => res.status(400).send(error));
  },
  retrieve(req, res) {
    return UserMeta
      .findOne({ where: { userId: req.params.userId } })
      .then(userMeta => {
        if (!userMeta) {
          return res.status(404).send({
            message: 'UserMeta Not Found',
          });
        }
        return res.status(200).send(userMeta);
      })
      .catch(error => res.status(400).send(error));
  },
  update(req, res) {
    return User
      .findOne({ where: { userId: req.params.userId } })
      .then(userMeta => {
        if (!userMeta) {
          return res.status(404).send({
            message: 'UserMeta Not Found',
          });
        }
        return userMeta
          .update({
            profilePic: req.body.profilePic || userMeta.profilePic,
            details: req.body.details || userMeta.details,
            instagram: req.body.instagram || userMeta.instagram,
            facebook: req.body.facebook || userMeta.facebook,
            twitter: req.body.twitter || userMeta.twitter,
            userId:req.params.userId || userMeta.userId
          })
          .then(() => res.status(200).send(userMeta))  // Send back the updated user.
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },


};