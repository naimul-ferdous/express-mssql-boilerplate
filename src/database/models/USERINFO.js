const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('USERINFO', {
    USERID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    BADGENUMBER: {
      type: DataTypes.STRING(12),
      allowNull: false
    },
    SSN: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    NAME: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    GENDER: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    TITLE: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    PAGER: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    BIRTHDAY: {
      type: DataTypes.DATE,
      allowNull: true
    },
    HIREDDAY: {
      type: DataTypes.DATE,
      allowNull: true
    },
    STREET: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    CITY: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    STATE: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    ZIP: {
      type: DataTypes.STRING(12),
      allowNull: true
    },
    OPHONE: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    FPHONE: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    VERIFICATIONMETHOD: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    DEFAULTDEPTID: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      defaultValue: 1
    },
    SECURITYFLAGS: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    ATT: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 1
    },
    INLATE: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 1
    },
    OUTEARLY: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 1
    },
    OVERTIME: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 1
    },
    SEP: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 1
    },
    HOLIDAY: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 1
    },
    MINZU: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    PASSWORD: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    LUNCHDURATION: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 1
    },
    MVerifyPass: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    PHOTO: {
      type: DataTypes.BLOB,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'USERINFO',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "BADGENUMBER",
        unique: true,
        fields: [
          { name: "BADGENUMBER" },
        ]
      },
      {
        name: "USERIDS",
        unique: true,
        fields: [
          { name: "USERID" },
        ]
      },
    ]
  });
};
