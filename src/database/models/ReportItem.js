const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ReportItem', {
    RIID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    RIIndex: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ShowIt: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    RIName: {
      type: DataTypes.STRING(12),
      allowNull: true
    },
    UnitName: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    Formula: {
      type: DataTypes.BLOB,
      allowNull: false
    },
    CalcBySchClass: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    StatisticMethod: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    CalcLast: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    Notes: {
      type: DataTypes.BLOB,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ReportItem',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__ReportIt__464E992E68179541",
        unique: true,
        fields: [
          { name: "RIID" },
        ]
      },
    ]
  });
};
