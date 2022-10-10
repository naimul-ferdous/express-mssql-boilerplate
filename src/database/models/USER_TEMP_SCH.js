const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('USER_TEMP_SCH', {
    USERID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    COMETIME: {
      type: DataTypes.DATE,
      allowNull: false,
      primaryKey: true
    },
    LEAVETIME: {
      type: DataTypes.DATE,
      allowNull: false,
      primaryKey: true
    },
    OVERTIME: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    TYPE: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      defaultValue: 0
    },
    FLAG: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      defaultValue: 1
    },
    SCHCLASSID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: -1
    }
  }, {
    sequelize,
    tableName: 'USER_TEMP_SCH',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "USER_TEMP",
        unique: true,
        fields: [
          { name: "USERID" },
          { name: "COMETIME" },
          { name: "LEAVETIME" },
        ]
      },
    ]
  });
};
