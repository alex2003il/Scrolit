'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserMeta = sequelize.define('UserMeta', {
    instagram: DataTypes.STRING,
    facebook: DataTypes.STRING,
    twitter: DataTypes.STRING,
    profilePic: DataTypes.STRING,
    details: DataTypes.STRING
  }, {});
  UserMeta.associate = function(models) {
    UserMeta.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete: 'CASCADE',
    });
  };
  return UserMeta;
};