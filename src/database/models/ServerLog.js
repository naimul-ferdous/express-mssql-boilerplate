const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ServerLog', {
    ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    EVENT: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    USERID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    EnrollNumber: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    parameter: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    EVENTTIME: {
      type: DataTypes.DATE,
      allowNull: false
    },
    SENSORID: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    OPERATOR: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ServerLog',
    schema: 'dbo',
    timestamps: false
  });
};
