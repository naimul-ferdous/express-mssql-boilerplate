const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('HOLIDAYS', {
    HOLIDAYID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    HOLIDAYNAME: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    HOLIDAYYEAR: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    HOLIDAYMONTH: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    HOLIDAYDAY: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      defaultValue: 1
    },
    STARTTIME: {
      type: DataTypes.DATE,
      allowNull: true
    },
    DURATION: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    HOLIDAYTYPE: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    XINBIE: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    MINZU: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    DeptID: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      defaultValue: 1
    },
    timezone: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'HOLIDAYS',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "HOLID",
        unique: true,
        fields: [
          { name: "HOLIDAYID" },
        ]
      },
      {
        name: "HOLIDAYNAME",
        unique: true,
        fields: [
          { name: "HOLIDAYNAME" },
        ]
      },
    ]
  });
};
