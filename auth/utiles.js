const jwt = require('jsonwebtoken');

function create(user){
  console.log('this is the user',user);
  return new Promise((resolve,reject) => {
    jwt.sign(user,process.env.TOKEN_SECRET, {expiresIn : '1d'}, (error,token) => {
      if(error) return resolve(error);
      resolve(token);
    });
  });
}
module.exports = {create};
