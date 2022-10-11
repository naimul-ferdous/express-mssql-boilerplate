const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DeptUsedSchs', {
    DeptId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    SchId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'DeptUsedSchs',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "DEPT_USED_SCH",
        unique: true,
        fields: [
          { name: "DeptId" },
          { name: "SchId" },
        ]
      },
    ]
  });
};
