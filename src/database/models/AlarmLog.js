const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AlarmLog', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Operator: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    EnrollNumber: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    LogTime: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.fn('getdate')
    },
    MachineAlias: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    AlarmType: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'AlarmLog',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__AlarmLog__3214EC27E0074741",
        unique: true,
        fields: [
          { name: "ID" },
        ]
      },
    ]
  });
};
