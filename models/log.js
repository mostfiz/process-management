'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Log extends Model {
    static associate(models) {
      Log.belongsTo(models.Process, { foreignKey: 'processId' });
    }
  };
  Log.init({
    processId: DataTypes.INTEGER,
    loggedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Log',
  });
  return Log;
};
