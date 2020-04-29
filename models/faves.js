'use strict';
module.exports = (sequelize, DataTypes) => {
  const faves = sequelize.define('faves', {
    userId: DataTypes.INTEGER
  }, {});
  faves.associate = function(models) {
    // associations can be defined here
  };
  return faves;
};