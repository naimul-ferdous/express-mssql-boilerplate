const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('LeaveClass', {
    LeaveId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    LeaveName: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    MinUnit: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 1
    },
    Unit: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 1
    },
    RemaindProc: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 1
    },
    RemaindCount: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 1
    },
    ReportSymbol: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: "-"
    },
    Deduct: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0
    },
    Color: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    Classify: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'LeaveClass',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__LeaveCla__796DB959A1D318B7",
        unique: true,
        fields: [
          { name: "LeaveId" },
        ]
      },
    ]
  });
};
