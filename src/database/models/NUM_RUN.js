const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('NUM_RUN', {
    NUM_RUNID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    OLDID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: -1
    },
    NAME: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    STARTDATE: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: "1900-1-1"
    },
    ENDDATE: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: "2099-12-31"
    },
    CYLE: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      defaultValue: 1
    },
    UNITS: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'NUM_RUN',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "NUMID",
        unique: true,
        fields: [
          { name: "NUM_RUNID" },
        ]
      },
    ]
  });
};
