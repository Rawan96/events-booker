const { serverError } = require('./error/server');
const { clientError } = require('./error/client');


const {
  cancelRegistration,
  getEvents,
  checkUser,
  checkEventExist,
  checkAlreadBooked,
  generateCode,
  userWillAttend,
  sendInvitation,
  sendSms,
  registerValidation,
  newUserExist,
  addUserToDB,
} = require('./routes/user');

const {
  login,
  validateEvent,
  createEvent,
  getUsersEvent,
  getUsersData,
  logout,
  viewEventsOnDate,

} = require('./routes/admin');


const {
  validateAttendence,
  checkUserBooking,
  signAttendance,
  pinCodeValidation,
  getHashedPinCode,
} = require('./routes/portal');


module.exports = {
  serverError,
  clientError,
  registerValidation,
  newUserExist,
  addUserToDB,
  sendSms,
  checkUser,
  checkEventExist,
  generateCode,
  userWillAttend,
  checkAlreadBooked,
  sendInvitation,
  cancelRegistration,
  getEvents,
  login,
  logout,
  getUsersEvent,
  getUsersData,
  validateEvent,
  createEvent,
  validateAttendence,
  checkUserBooking,
  signAttendance,
  viewEventsOnDate,
  pinCodeValidation,
  getHashedPinCode,
};
