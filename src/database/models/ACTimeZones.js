const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ACTimeZones', {
    TimeZoneID: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      primaryKey: true
    },
    Name: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    SunStart: {
      type: DataTypes.DATE,
      allowNull: true
    },
    SunEnd: {
      type: DataTypes.DATE,
      allowNull: true
    },
    MonStart: {
      type: DataTypes.DATE,
      allowNull: true
    },
    MonEnd: {
      type: DataTypes.DATE,
      allowNull: true
    },
    TuesStart: {
      type: DataTypes.DATE,
      allowNull: true
    },
    TuesEnd: {
      type: DataTypes.DATE,
      allowNull: true
    },
    WedStart: {
      type: DataTypes.DATE,
      allowNull: true
    },
    WedEnd: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ThursStart: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ThursEnd: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FriStart: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FriEnd: {
      type: DataTypes.DATE,
      allowNull: true
    },
    SatStart: {
      type: DataTypes.DATE,
      allowNull: true
    },
    SatEnd: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ACTimeZones',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__ACTimeZo__78D387CFE063C407",
        unique: true,
        fields: [
          { name: "TimeZoneID" },
        ]
      },
    ]
  });
};
