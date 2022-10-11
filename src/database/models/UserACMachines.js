const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('UserACMachines', {
    UserID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Deviceid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'UserACMachines',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "UserAC_Machines",
        unique: true,
        fields: [
          { name: "UserID" },
          { name: "Deviceid" },
        ]
      },
    ]
  });
};
