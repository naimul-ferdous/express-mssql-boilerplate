const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ACUnlockComb', {
    UnlockCombID: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      primaryKey: true
    },
    Name: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    Group01: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    Group02: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    Group03: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    Group04: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    Group05: {
      type: DataTypes.SMALLINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ACUnlockComb',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__ACUnlock__1F6C4570129C2445",
        unique: true,
        fields: [
          { name: "UnlockCombID" },
        ]
      },
    ]
  });
};
