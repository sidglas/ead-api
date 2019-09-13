const UserModel = require('../models/users.model');
const { ERR_DUPLICATE_EMAIL } = require('../utils/errorTypes');

//const grava = async (userData) => {
const create = async (userData) => {

  // Verifica se ja existe (pelo email)
  const userExists = await UserModel.exists ({ email: userData.email});
  if (userExists) {
    //nao esquecer de tratar este erro o nome do erro e de escolha livre
    //quem chama a create é o handler, entao lá vamos tratar este erro.
    throw new Error(ERR_DUPLICATE_EMAIL)
  }
  console.log(userData);
  const userModel = new UserModel(userData);
  return userModel.save();
};

const findByEmail = async email => (
  await UserModel.findOne({email: email})  //pode deixar apenas ({email})
);



module.exports = {
  create,
  findByEmail,
}
