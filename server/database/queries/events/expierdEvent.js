const connection = require('../../config/connection');

const expiredEvent = (eventId) => connection.query('update events set expired = true where id = $1', [eventId]);

module.exports = expiredEvent;
