const userHandler = require('../handlers/users.handlers');
const userSchema = require('../schemas/users.schema');
module.exports = [
  {
    method: 'POST',
    path: '/users',
    handler: userHandler.create,
    options: {
      validate: {
        payload:userSchema
      }
    }
  }
];
