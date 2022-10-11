const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AuditedExc', {
    AEID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CheckTime: {
      type: DataTypes.DATE,
      allowNull: false
    },
    NewExcID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    IsLeave: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    UName: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    UTime: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'AuditedExc',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__AuditedE__40737CF39AC0E9B6",
        unique: true,
        fields: [
          { name: "AEID" },
        ]
      },
    ]
  });
};
