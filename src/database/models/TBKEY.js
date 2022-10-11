const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TBKEY', {
    PreName: {
      type: DataTypes.STRING(12),
      allowNull: true
    },
    ONEKEY: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'TBKEY',
    schema: 'dbo',
    timestamps: false
  });
};
