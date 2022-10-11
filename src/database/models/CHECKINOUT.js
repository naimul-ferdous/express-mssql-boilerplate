const Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CHECKINOUT', {
    USERID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'USERINFO',
        key: 'USERID'
      }
    },
    CHECKTIME: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('getdate'),
      primaryKey: true
    },
    CHECKTYPE: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "I"
    },
    VERIFYCODE: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    SENSORID: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    Memoinfo: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    WorkCode: {
      type: DataTypes.STRING(24),
      allowNull: true,
      defaultValue: "0"
    },
    sn: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    UserExtFmt: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'CHECKINOUT',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "USERCHECKTIME",
        unique: true,
        fields: [
          { name: "USERID" },
          { name: "CHECKTIME" },
        ]
      },
    ]
  });
};
