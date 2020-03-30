const connction = require('../config/connection');

module.exports = (userCode, eventId) => {
  const sql = {
    text: 'select * from user_event where user_code = $1 and event_id = $2',
    values: [userCode, eventId],
  };
  return connction.query(sql);
};
