const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AUTHDEVICE', {
    ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true
    },
    USERID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    MachineID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'AUTHDEVICE',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "AUTHKEY",
        unique: true,
        fields: [
          { name: "USERID" },
          { name: "MachineID" },
        ]
      },
    ]
  });
};
