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
      type: DataTypes.STRING(24),
      allowNull: false
    },
    SSN: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    NAME: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    GENDER: {
      type: DataTypes.STRING(8),
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
      type: DataTypes.STRING(80),
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
      type: DataTypes.STRING(50),
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
    },
    Notes: {
      type: DataTypes.BLOB,
      allowNull: true
    },
    privilege: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    InheritDeptSch: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      defaultValue: 1
    },
    InheritDeptSchClass: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      defaultValue: 1
    },
    AutoSchPlan: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      defaultValue: 1
    },
    MinAutoSchInterval: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 24
    },
    RegisterOT: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      defaultValue: 1
    },
    InheritDeptRule: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      defaultValue: 1
    },
    EMPRIVILEGE: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      defaultValue: 0
    },
    CardNo: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    FaceGroup: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    AccGroup: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
    },
    UseAccGroupTZ: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
    },
    VerifyCode: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    Expires: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    ValidCount: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    ValidTimeBegin: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ValidTimeEnd: {
      type: DataTypes.DATE,
      allowNull: true
    },
    TimeZone1: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
    },
    TimeZone2: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    TimeZone3: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
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
