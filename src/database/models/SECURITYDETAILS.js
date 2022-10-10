const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SECURITYDETAILS', {
    SECURITYDETAILID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    USERID: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    DEPTID: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    SCHEDULE: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    USERINFO: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    ENROLLFINGERS: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    REPORTVIEW: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    REPORT: {
      type: DataTypes.STRING(10),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SECURITYDETAILS',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "NAMEID2",
        unique: true,
        fields: [
          { name: "SECURITYDETAILID" },
        ]
      },
    ]
  });
};
