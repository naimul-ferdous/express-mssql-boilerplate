const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('UserACPrivilege', {
    UserID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    DeviceID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ACGroupID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    IsUseGroup: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    TimeZone1: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    TimeZone2: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    TimeZone3: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    verifystyle: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'UserACPrivilege',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "pk_privilege",
        unique: true,
        fields: [
          { name: "UserID" },
          { name: "DeviceID" },
        ]
      },
    ]
  });
};
