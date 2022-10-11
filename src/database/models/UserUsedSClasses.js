const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('UserUsedSClasses', {
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    SchId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'UserUsedSClasses',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "USER_USED_SCL",
        unique: true,
        fields: [
          { name: "UserId" },
          { name: "SchId" },
        ]
      },
    ]
  });
};
