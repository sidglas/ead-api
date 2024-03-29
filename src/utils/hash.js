const bcrypt = require('bcryptjs');

//const make = (value) => {
//   bcrypt.hash(value,10)
//}

//trocando { } por () - retorno imediato
const make = value => (
    bcrypt.hash(value,10)
 )

 const compare = (value, valueHash) => (
  bcrypt.compare(value, valueHash)
 );

module.exports = {
    make,
    compare,
};