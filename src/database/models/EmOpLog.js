const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('EmOpLog', {
    ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    USERID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    OperateTime: {
      type: DataTypes.DATE,
      allowNull: false
    },
    manipulationID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Params1: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Params2: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Params3: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Params4: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    SensorId: {
      type: DataTypes.STRING(5),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'EmOpLog',
    schema: 'dbo',
    timestamps: false
  });
};
