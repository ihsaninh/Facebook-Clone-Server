'use strict';
module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    avatar: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    gender: DataTypes.STRING
  }, {});
  users.associate = function(models) {
    users.hasMany(models.posts, {
      foreignKey: 'user_id'
    })
  };
  return users;
};