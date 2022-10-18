const jwt = require('jsonwebtoken');
require('dotenv').config();

function generatorToken(payload){
  const token = jwt.sign(payload, process.env.SECRET);
  return token;
}

function verifyToken(token){
  const decoded = jwt.verify(token, process.env.SECRET);
  return decoded;
}

module.exports = {
  generatorToken, verifyToken
}