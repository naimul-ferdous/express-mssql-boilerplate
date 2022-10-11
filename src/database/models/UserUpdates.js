const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('UserUpdates', {
    UpdateId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    BadgeNumber: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'UserUpdates',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__UserUpda__7A0CF3C5490D1FDE",
        unique: true,
        fields: [
          { name: "UpdateId" },
        ]
      },
    ]
  });
};
