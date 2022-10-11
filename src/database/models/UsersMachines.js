const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('UsersMachines', {
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
    DEVICEID: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'UsersMachines',
    schema: 'dbo',
    timestamps: false
  });
};
