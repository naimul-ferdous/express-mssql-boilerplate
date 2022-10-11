const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('FaceTemp', {
    TEMPLATEID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    USERNO: {
      type: DataTypes.STRING(24),
      allowNull: true
    },
    SIZE: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    pin: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    FACEID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    VALID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    RESERVE: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    ACTIVETIME: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    VFCOUNT: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    TEMPLATE: {
      type: DataTypes.BLOB,
      allowNull: true
    },
    UserID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'FaceTemp',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "FACEID",
        fields: [
          { name: "FACEID" },
        ]
      },
      {
        name: "PK__FaceTemp__9EE4AD538511E686",
        unique: true,
        fields: [
          { name: "TEMPLATEID" },
        ]
      },
      {
        name: "TEMPLATEID",
        fields: [
          { name: "TEMPLATEID" },
        ]
      },
      {
        name: "USERNO",
        fields: [
          { name: "USERNO" },
        ]
      },
      {
        name: "VALID",
        fields: [
          { name: "VALID" },
        ]
      },
    ]
  });
};
