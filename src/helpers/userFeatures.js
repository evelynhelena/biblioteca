import jwt from 'jsonwebtoken';
function generateToken(idLogin,user){
  const secret = process.env.SECRET;
  return jwt.sign({infoUser: {
      idUser: idLogin,
      userName: user
  }},secret,{expiresIn: 60 * 60 * 5});
}

export {generateToken};