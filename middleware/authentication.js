const db = require('../config/db');
const {verifyToken} = require('../helper/jwt');

async function authentication(req, res, next){
  try {
    const token = req.headers["x-access-token"];
    const userDecoded = verifyToken(token);

    let userData = await db.query(
      `SELECT * from users where id = ($1);`,
      [userDecoded.id]
    );
    
    if(!userData){
      return res.status(401).json({
        message:"User Not Found"
      });
    }
    const  userDataId = userData.rows[0];
    res.dataUser = userDataId;
    return next();
  } catch (error) {
    res.status(500).json(error);
  }
}
module.exports = authentication;