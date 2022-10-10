var DataTypes = require("sequelize").DataTypes;
var _AttParam = require("./AttParam");
var _CHECKEXACT = require("./CHECKEXACT");
var _CHECKINOUT = require("./CHECKINOUT");
var _DEPARTMENTS = require("./DEPARTMENTS");
var _EXCNOTES = require("./EXCNOTES");
var _HOLIDAYS = require("./HOLIDAYS");
var _LeaveClass = require("./LeaveClass");
var _LeaveClass1 = require("./LeaveClass1");
var _NUM_RUN = require("./NUM_RUN");
var _NUM_RUN_DEIL = require("./NUM_RUN_DEIL");
var _SECURITYDETAILS = require("./SECURITYDETAILS");
var _SHIFT = require("./SHIFT");
var _SchClass = require("./SchClass");
var _TEMPLATE = require("./TEMPLATE");
var _USERINFO = require("./USERINFO");
var _USER_OF_RUN = require("./USER_OF_RUN");
var _USER_SPEDAY = require("./USER_SPEDAY");
var _USER_TEMP_SCH = require("./USER_TEMP_SCH");

function initModels(sequelize) {
  var AttParam = _AttParam(sequelize, DataTypes);
  var CHECKEXACT = _CHECKEXACT(sequelize, DataTypes);
  var CHECKINOUT = _CHECKINOUT(sequelize, DataTypes);
  var DEPARTMENTS = _DEPARTMENTS(sequelize, DataTypes);
  var EXCNOTES = _EXCNOTES(sequelize, DataTypes);
  var HOLIDAYS = _HOLIDAYS(sequelize, DataTypes);
  var LeaveClass = _LeaveClass(sequelize, DataTypes);
  var LeaveClass1 = _LeaveClass1(sequelize, DataTypes);
  var NUM_RUN = _NUM_RUN(sequelize, DataTypes);
  var NUM_RUN_DEIL = _NUM_RUN_DEIL(sequelize, DataTypes);
  var SECURITYDETAILS = _SECURITYDETAILS(sequelize, DataTypes);
  var SHIFT = _SHIFT(sequelize, DataTypes);
  var SchClass = _SchClass(sequelize, DataTypes);
  var TEMPLATE = _TEMPLATE(sequelize, DataTypes);
  var USERINFO = _USERINFO(sequelize, DataTypes);
  var USER_OF_RUN = _USER_OF_RUN(sequelize, DataTypes);
  var USER_SPEDAY = _USER_SPEDAY(sequelize, DataTypes);
  var USER_TEMP_SCH = _USER_TEMP_SCH(sequelize, DataTypes);


  return {
    AttParam,
    CHECKEXACT,
    CHECKINOUT,
    DEPARTMENTS,
    EXCNOTES,
    HOLIDAYS,
    LeaveClass,
    LeaveClass1,
    NUM_RUN,
    NUM_RUN_DEIL,
    SECURITYDETAILS,
    SHIFT,
    SchClass,
    TEMPLATE,
    USERINFO,
    USER_OF_RUN,
    USER_SPEDAY,
    USER_TEMP_SCH,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
