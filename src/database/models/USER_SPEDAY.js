const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('USER_SPEDAY', {
    USERID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    STARTSPECDAY: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "1900-1-1",
      primaryKey: true
    },
    ENDSPECDAY: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: "2099-12-31"
    },
    DATEID: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: -1,
      primaryKey: true
    },
    YUANYING: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    DATE: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'USER_SPEDAY',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "USER_SEP",
        unique: true,
        fields: [
          { name: "USERID" },
          { name: "STARTSPECDAY" },
          { name: "DATEID" },
        ]
      },
    ]
  });
};
