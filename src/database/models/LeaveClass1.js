const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('LeaveClass1', {
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
      defaultValue: 0
    },
    RemaindProc: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 2
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
    LeaveType: {
      type: DataTypes.SMALLINT,
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
    },
    Calc: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'LeaveClass1',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__LeaveCla__796DB9596829D681",
        unique: true,
        fields: [
          { name: "LeaveId" },
        ]
      },
    ]
  });
};
