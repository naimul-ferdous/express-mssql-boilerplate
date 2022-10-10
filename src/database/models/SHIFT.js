const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SHIFT', {
    SHIFTID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    NAME: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    USHIFTID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: -1
    },
    STARTDATE: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "1900-1-1"
    },
    ENDDATE: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: "1900-12-31"
    },
    RUNNUM: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      defaultValue: 0
    },
    SCH1: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    SCH2: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    SCH3: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    SCH4: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    SCH5: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    SCH6: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    SCH7: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    SCH8: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    SCH9: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    SCH10: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    SCH11: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    SCH12: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    CYCLE: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      defaultValue: 0
    },
    UNITS: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'SHIFT',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "SHIFTS",
        unique: true,
        fields: [
          { name: "SHIFTID" },
        ]
      },
    ]
  });
};
