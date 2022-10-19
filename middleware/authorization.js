const db = require("../config/db");

async function authorization(req, res, next){
  try {
    const userId = req.params.id;
    const authenticatedUserId = res.dataUser.id;

    const reflectionData = await db.query(
      `SELECT * FROM reflections WHERE id = ($1)`,
      [userId]
    );
    if(reflectionData.rowCount == 0){
      return res.status(404).json({message: "Reflection not found"});
    }
    let reflectionDataIdAuth = reflectionData.rows[0].owner_id;
    if(authenticatedUserId === reflectionDataIdAuth){
      return next()
    }else{
      return res.status(403).json({message: "Forbidden"})
    }
  } catch (error) {
    res.status(500).json(error);
  }
}

module.exports = authorization;