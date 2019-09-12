const boom = require('@hapi/boom');
const userRepository = require('../repositories/users.repository')
const { ERR_DUPLICATE_EMAIL } = require('../utils/errorTypes');
//const bcrypt = require('bcryptjs');  substituido por
const hash = require('../utils/hash');
const create = async (req ,h) => {
  try {
    //const l = 2;
    const area = (l, c) => 
       (l * c)
    ;
    console.log(area(8,5));
    const ll = area(9,6);



    console.log(ll);
    const userData = req.payload;
    // const passwordHash = await bcrypt.hash(userData.password, 10); substituido por 
    const passwordHash = await hash.make(userData.password, 10);
    //console.log( password );
    console.log( passwordHash ); 
    userData.password = passwordHash;
    const user = await userRepository.grava(userData);
    console.log('Eu crio SIM');
    return h.response(user).code(201)
  } catch (e) {
      switch(e.message) {
        case ERR_DUPLICATE_EMAIL :
          throw boom.badData('E-mail Duplicado');
        default:
          throw boom.badImplementation(e);
      }
    //'ERR_DUPLICATE_EMAIL'
  }


};  

  module.exports = {
      create,
  } 
