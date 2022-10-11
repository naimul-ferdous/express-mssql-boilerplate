const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('NUM_RUN_DEIL', {
    NUM_RUNID: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      primaryKey: true
    },
    STARTTIME: {
      type: DataTypes.DATE,
      allowNull: false,
      primaryKey: true
    },
    ENDTIME: {
      type: DataTypes.DATE,
      allowNull: true
    },
    SDAYS: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      primaryKey: true
    },
    EDAYS: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    SCHCLASSID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: -1
    },
    OverTime: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'NUM_RUN_DEIL',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "NUMID2",
        unique: true,
        fields: [
          { name: "NUM_RUNID" },
          { name: "SDAYS" },
          { name: "STARTTIME" },
        ]
      },
    ]
  });
};
