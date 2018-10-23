'use strict';
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    image: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  Post.associate = function(models) {
    Post.belongsTo(models.ProductCategory, {
      foreignKey: 'categoryId',
    });
    Post.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete: 'CASCADE',
    });
  };
  
  return Post;
};