const boom = require('@hapi/boom');
const authenticate = require('../auth/authenticate.auth')
const { ERR_USER_NOT_FOUND } = require('../utils/errorTypes');
const { ERR_INVALID_PASSWORD } = require('../utils/errorTypes');
const { ERR_INVALID_TOKEN } = require('../utils/errorTypes');
const login = async (req ,h) => {
  const {email, password} = req.payload;

  try {
    const token = await authenticate.login(email, password);
    return h.response({token: token}).code(200);
  } catch (e) {
    switch (e.message) {
      case ERR_USER_NOT_FOUND: 
        throw boom.notFound('Usuário não encontrado');
      case ERR_INVALID_PASSWORD:
        throw boom.badData('E-mail ou senha inválido');
      case ERR_INVALID_TOKEN:
        throw boom.badImplementation('Erro ao implementar o token ');        
      default: 
        throw boom.badImplementation(e);
    }
  }
   
  
};

module.exports = {
  login,
};
// nao esquecer