const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TBSMSINFO', {
    REFERENCE: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    SMSID: {
      type: DataTypes.STRING(16),
      allowNull: false
    },
    SMSINDEX: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    SMSTYPE: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    SMSCONTENT: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    SMSSTARTTM: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    SMSTMLENG: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    GENTM: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'TBSMSINFO',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__TBSMSINF__CAA2317D916990ED",
        unique: true,
        fields: [
          { name: "REFERENCE" },
        ]
      },
      {
        name: "UK_SMSINFOCode",
        unique: true,
        fields: [
          { name: "SMSID" },
        ]
      },
    ]
  });
};
