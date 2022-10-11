const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SchClass', {
    schClassid: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    schName: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    StartTime: {
      type: DataTypes.DATE,
      allowNull: false
    },
    EndTime: {
      type: DataTypes.DATE,
      allowNull: false
    },
    LateMinutes: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    EarlyMinutes: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CheckIn: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
    },
    CheckOut: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
    },
    CheckInTime1: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CheckInTime2: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CheckOutTime1: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CheckOutTime2: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Color: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 16715535
    },
    AutoBind: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      defaultValue: 1
    },
    WorkDay: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: 1
    },
    SensorID: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    WorkMins: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'SchClass',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__SchClass__FFE76E83F0AB51F8",
        unique: true,
        fields: [
          { name: "schClassid" },
        ]
      },
    ]
  });
};
