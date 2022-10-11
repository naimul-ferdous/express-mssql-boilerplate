var DataTypes = require("sequelize").DataTypes;
var _ACGroup = require("./ACGroup");
var _ACTimeZones = require("./ACTimeZones");
var _ACUnlockComb = require("./ACUnlockComb");
var _AUTHDEVICE = require("./AUTHDEVICE");
var _AlarmLog = require("./AlarmLog");
var _AttParam = require("./AttParam");
var _AuditedExc = require("./AuditedExc");
var _CHECKEXACT = require("./CHECKEXACT");
var _CHECKINOUT = require("./CHECKINOUT");
var _DEPARTMENTS = require("./DEPARTMENTS");
var _DeptUsedSchs = require("./DeptUsedSchs");
var _EXCNOTES = require("./EXCNOTES");
var _EmOpLog = require("./EmOpLog");
var _FaceTemp = require("./FaceTemp");
var _HOLIDAYS = require("./HOLIDAYS");
var _LeaveClass = require("./LeaveClass");
var _LeaveClass1 = require("./LeaveClass1");
var _Machines = require("./Machines");
var _NUM_RUN = require("./NUM_RUN");
var _NUM_RUN_DEIL = require("./NUM_RUN_DEIL");
var _ReportItem = require("./ReportItem");
var _SECURITYDETAILS = require("./SECURITYDETAILS");
var _SHIFT = require("./SHIFT");
var _SchClass = require("./SchClass");
var _SequelizeMeta = require("./SequelizeMeta");
var _ServerLog = require("./ServerLog");
var _SystemLog = require("./SystemLog");
var _TBKEY = require("./TBKEY");
var _TBSMSALLOT = require("./TBSMSALLOT");
var _TBSMSINFO = require("./TBSMSINFO");
var _TEMPLATE = require("./TEMPLATE");
var _USERINFO = require("./USERINFO");
var _USER_OF_RUN = require("./USER_OF_RUN");
var _USER_SPEDAY = require("./USER_SPEDAY");
var _USER_TEMP_SCH = require("./USER_TEMP_SCH");
var _UserACMachines = require("./UserACMachines");
var _UserACPrivilege = require("./UserACPrivilege");
var _UserUpdates = require("./UserUpdates");
var _UserUsedSClasses = require("./UserUsedSClasses");
var _UsersMachines = require("./UsersMachines");

function initModels(sequelize) {
  var ACGroup = _ACGroup(sequelize, DataTypes);
  var ACTimeZones = _ACTimeZones(sequelize, DataTypes);
  var ACUnlockComb = _ACUnlockComb(sequelize, DataTypes);
  var AUTHDEVICE = _AUTHDEVICE(sequelize, DataTypes);
  var AlarmLog = _AlarmLog(sequelize, DataTypes);
  var AttParam = _AttParam(sequelize, DataTypes);
  var AuditedExc = _AuditedExc(sequelize, DataTypes);
  var CHECKEXACT = _CHECKEXACT(sequelize, DataTypes);
  var CHECKINOUT = _CHECKINOUT(sequelize, DataTypes);
  var DEPARTMENTS = _DEPARTMENTS(sequelize, DataTypes);
  var DeptUsedSchs = _DeptUsedSchs(sequelize, DataTypes);
  var EXCNOTES = _EXCNOTES(sequelize, DataTypes);
  var EmOpLog = _EmOpLog(sequelize, DataTypes);
  var FaceTemp = _FaceTemp(sequelize, DataTypes);
  var HOLIDAYS = _HOLIDAYS(sequelize, DataTypes);
  var LeaveClass = _LeaveClass(sequelize, DataTypes);
  var LeaveClass1 = _LeaveClass1(sequelize, DataTypes);
  var Machines = _Machines(sequelize, DataTypes);
  var NUM_RUN = _NUM_RUN(sequelize, DataTypes);
  var NUM_RUN_DEIL = _NUM_RUN_DEIL(sequelize, DataTypes);
  var ReportItem = _ReportItem(sequelize, DataTypes);
  var SECURITYDETAILS = _SECURITYDETAILS(sequelize, DataTypes);
  var SHIFT = _SHIFT(sequelize, DataTypes);
  var SchClass = _SchClass(sequelize, DataTypes);
  var SequelizeMeta = _SequelizeMeta(sequelize, DataTypes);
  var ServerLog = _ServerLog(sequelize, DataTypes);
  var SystemLog = _SystemLog(sequelize, DataTypes);
  var TBKEY = _TBKEY(sequelize, DataTypes);
  var TBSMSALLOT = _TBSMSALLOT(sequelize, DataTypes);
  var TBSMSINFO = _TBSMSINFO(sequelize, DataTypes);
  var TEMPLATE = _TEMPLATE(sequelize, DataTypes);
  var USERINFO = _USERINFO(sequelize, DataTypes);
  var USER_OF_RUN = _USER_OF_RUN(sequelize, DataTypes);
  var USER_SPEDAY = _USER_SPEDAY(sequelize, DataTypes);
  var USER_TEMP_SCH = _USER_TEMP_SCH(sequelize, DataTypes);
  var UserACMachines = _UserACMachines(sequelize, DataTypes);
  var UserACPrivilege = _UserACPrivilege(sequelize, DataTypes);
  var UserUpdates = _UserUpdates(sequelize, DataTypes);
  var UserUsedSClasses = _UserUsedSClasses(sequelize, DataTypes);
  var UsersMachines = _UsersMachines(sequelize, DataTypes);

  CHECKINOUT.belongsTo(USERINFO, { as: "USER", foreignKey: "USERID"});
  USERINFO.hasMany(CHECKINOUT, { as: "CHECKINOUTs", foreignKey: "USERID"});

  return {
    ACGroup,
    ACTimeZones,
    ACUnlockComb,
    AUTHDEVICE,
    AlarmLog,
    AttParam,
    AuditedExc,
    CHECKEXACT,
    CHECKINOUT,
    DEPARTMENTS,
    DeptUsedSchs,
    EXCNOTES,
    EmOpLog,
    FaceTemp,
    HOLIDAYS,
    LeaveClass,
    LeaveClass1,
    Machines,
    NUM_RUN,
    NUM_RUN_DEIL,
    ReportItem,
    SECURITYDETAILS,
    SHIFT,
    SchClass,
    SequelizeMeta,
    ServerLog,
    SystemLog,
    TBKEY,
    TBSMSALLOT,
    TBSMSINFO,
    TEMPLATE,
    USERINFO,
    USER_OF_RUN,
    USER_SPEDAY,
    USER_TEMP_SCH,
    UserACMachines,
    UserACPrivilege,
    UserUpdates,
    UserUsedSClasses,
    UsersMachines,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
