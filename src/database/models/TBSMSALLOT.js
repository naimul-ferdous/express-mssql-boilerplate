const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TBSMSALLOT', {
    REFERENCE: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    SMSREF: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    USERREF: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    GENTM: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'TBSMSALLOT',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__TBSMSALL__CAA2317D9DBFBF35",
        unique: true,
        fields: [
          { name: "REFERENCE" },
        ]
      },
    ]
  });
};
