const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CHECKINOUT', {
    USERID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    CHECKTIME: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('getdate'),
      primaryKey: true
    },
    CHECKTYPE: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "I"
    },
    VERIFYCODE: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    SENSORID: {
      type: DataTypes.STRING(5),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'CHECKINOUT',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "USERCHECKTIME",
        unique: true,
        fields: [
          { name: "USERID" },
          { name: "CHECKTIME" },
        ]
      },
    ]
  });
};
