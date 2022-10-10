const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CHECKEXACT', {
    EXACTID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    USERID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    CHECKTIME: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: "0"
    },
    CHECKTYPE: {
      type: DataTypes.STRING(2),
      allowNull: true,
      defaultValue: "0"
    },
    ISADD: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      defaultValue: 0
    },
    YUYIN: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    ISMODIFY: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      defaultValue: 0
    },
    ISDELETE: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      defaultValue: 0
    },
    INCOUNT: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      defaultValue: 0
    },
    ISCOUNT: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      defaultValue: 0
    },
    MODIFYBY: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    DATE: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'CHECKEXACT',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "EXACTID",
        unique: true,
        fields: [
          { name: "EXACTID" },
        ]
      },
    ]
  });
};
