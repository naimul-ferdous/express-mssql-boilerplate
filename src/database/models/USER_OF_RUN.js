const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('USER_OF_RUN', {
    USERID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    NUM_OF_RUN_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    STARTDATE: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "1900-1-1",
      primaryKey: true
    },
    ENDDATE: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "2099-12-31",
      primaryKey: true
    },
    ISNOTOF_RUN: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    ORDER_RUN: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'USER_OF_RUN',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "USER_ST_NUM",
        unique: true,
        fields: [
          { name: "USERID" },
          { name: "NUM_OF_RUN_ID" },
          { name: "STARTDATE" },
          { name: "ENDDATE" },
        ]
      },
    ]
  });
};
