const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AttParam', {
    PARANAME: {
      type: DataTypes.STRING(20),
      allowNull: false,
      primaryKey: true
    },
    PARATYPE: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    PARAVALUE: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'AttParam',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__AttParam__889D235F12C086B6",
        unique: true,
        fields: [
          { name: "PARANAME" },
        ]
      },
    ]
  });
};
