'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Process extends Model {
    static associate(models) {
      Process.hasMany(models.Log, { foreignKey: 'processId' });
    }
  };
  Process.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Process',
  });
  return Process;
};
