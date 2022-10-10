const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('EXCNOTES', {
    USERID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ATTDATE: {
      type: DataTypes.DATE,
      allowNull: true
    },
    NOTES: {
      type: DataTypes.STRING(200),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'EXCNOTES',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "EXCNOTE",
        unique: true,
        fields: [
          { name: "USERID" },
          { name: "ATTDATE" },
        ]
      },
    ]
  });
};
