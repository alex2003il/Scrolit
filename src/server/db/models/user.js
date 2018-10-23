'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: {
      type: DataTypes.STRING ,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING ,
      allowNull: false,
    },
  }, {});

  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Post, {
        foreignKey: 'userId',
        as: 'posts'
    });
    User.hasOne(models.UserMeta, {
      foreignKey: 'userId',
        as: 'metadata'
    });
  };
  return User;
};