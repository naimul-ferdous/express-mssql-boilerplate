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
    },
    InheritParentSch: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      defaultValue: 1
    },
    InheritDeptSch: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      defaultValue: 1
    },
    InheritDeptSchClass: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      defaultValue: 1
    },
    AutoSchPlan: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      defaultValue: 1
    },
    InLate: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      defaultValue: 1
    },
    OutEarly: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      defaultValue: 1
    },
    InheritDeptRule: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      defaultValue: 1
    },
    MinAutoSchInterval: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 24
    },
    RegisterOT: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      defaultValue: 1
    },
    DefaultSchId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    ATT: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      defaultValue: 1
    },
    Holiday: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      defaultValue: 1
    },
    OverTime: {
      type: DataTypes.SMALLINT,
      allowNull: true,
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
