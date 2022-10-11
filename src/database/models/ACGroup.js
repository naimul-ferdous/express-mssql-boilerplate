const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ACGroup', {
    GroupID: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      primaryKey: true
    },
    Name: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    TimeZone1: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      defaultValue: 0
    },
    TimeZone2: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      defaultValue: 0
    },
    TimeZone3: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      defaultValue: 0
    },
    holidayvaild: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    verifystyle: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ACGroup',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__ACGroup__149AF30AE0339961",
        unique: true,
        fields: [
          { name: "GroupID" },
        ]
      },
    ]
  });
};
