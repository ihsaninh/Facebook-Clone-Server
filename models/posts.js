'use strict';
module.exports = (sequelize, DataTypes) => {
  const posts = sequelize.define('posts', {
    post: DataTypes.TEXT,
    user_id: DataTypes.INTEGER
  }, {});
  posts.associate = function(models) {
    posts.belongsTo(models.users, {
    	foreignKey: 'user_id'
    });
  };
  return posts;
};