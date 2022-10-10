const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TEMPLATE', {
    TEMPLATEID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    USERID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    FINGERID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    TEMPLATE: {
      type: DataTypes.BLOB,
      allowNull: false
    },
    TEMPLATE2: {
      type: DataTypes.BLOB,
      allowNull: true
    },
    TEMPLATE3: {
      type: DataTypes.BLOB,
      allowNull: true
    },
    BITMAPPICTURE: {
      type: DataTypes.BLOB,
      allowNull: true
    },
    BITMAPPICTURE2: {
      type: DataTypes.BLOB,
      allowNull: true
    },
    BITMAPPICTURE3: {
      type: DataTypes.BLOB,
      allowNull: true
    },
    BITMAPPICTURE4: {
      type: DataTypes.BLOB,
      allowNull: true
    },
    USETYPE: {
      type: DataTypes.SMALLINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'TEMPLATE',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "TEMPLATED",
        unique: true,
        fields: [
          { name: "TEMPLATEID" },
        ]
      },
      {
        name: "USERFINGER",
        unique: true,
        fields: [
          { name: "USERID" },
          { name: "FINGERID" },
        ]
      },
    ]
  });
};
