const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SystemLog', {
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
    LogTime: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.fn('getdate')
    },
    MachineAlias: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    LogTag: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    LogDescr: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SystemLog',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__SystemLo__3214EC27BFA4F48B",
        unique: true,
        fields: [
          { name: "ID" },
        ]
      },
    ]
  });
};
