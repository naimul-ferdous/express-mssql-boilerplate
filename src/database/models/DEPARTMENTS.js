const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DEPARTMENTS', {
    DEPTID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    DEPTNAME: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    SUPDEPTID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'DEPARTMENTS',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "DEPTID",
        unique: true,
        fields: [
          { name: "DEPTID" },
        ]
      },
      {
        name: "DEPTNAME",
        fields: [
          { name: "DEPTNAME" },
        ]
      },
    ]
  });
};
