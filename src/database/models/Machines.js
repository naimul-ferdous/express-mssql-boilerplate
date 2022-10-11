const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Machines', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    MachineAlias: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    ConnectType: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    IP: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    SerialPort: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
    },
    Port: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
    },
    Baudrate: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    MachineNumber: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    IsHost: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    Enabled: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    CommPassword: {
      type: DataTypes.STRING(12),
      allowNull: true
    },
    UILanguage: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      defaultValue: -1
    },
    DateFormat: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      defaultValue: -1
    },
    InOutRecordWarn: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      defaultValue: -1
    },
    Idle: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      defaultValue: -1
    },
    Voice: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      defaultValue: -1
    },
    managercount: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      defaultValue: -1
    },
    usercount: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      defaultValue: -1
    },
    fingercount: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      defaultValue: -1
    },
    SecretCount: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      defaultValue: -1
    },
    FirmwareVersion: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    ProductType: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    LockControl: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      defaultValue: -1
    },
    Purpose: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      defaultValue: 1
    },
    ProduceKind: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
    },
    sn: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    PhotoStamp: {
      type: DataTypes.STRING(20),
      allowNull: true,
      defaultValue: "0"
    },
    IsIfChangeConfigServer2: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    IsAndroid: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "0"
    }
  }, {
    sequelize,
    tableName: 'Machines',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__Machines__3214EC27165C53D1",
        unique: true,
        fields: [
          { name: "ID" },
        ]
      },
    ]
  });
};
