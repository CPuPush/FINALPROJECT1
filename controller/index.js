const db = require("../config/db");

class reflectionController {
  static async register(req, res) {
    try {
      const { email, password } = req.body;

      if(!email || !password){
        return res.status(400).json({message:"Register failed"});
      }

      await db.query(
        `INSERT INTO users (email, password) VALUES ($1, $2);`,
        [email, password],);
      return res.status(201).json({message: "Register successfully"});

    } catch (error) {
      return res.status(500).json(error);
    }
  }

  static async login(req, res){
    try {
      const {email, password} = req.body;
      
      if(!email || !password){
        return res.status(400).json({message:"Login failed"});
      }
      
      let userData = await db.query(
        `SELECT * from users where email = ($1) AND password =($2);`,
        [email, password]
      );
      if(!(userData["rows"][0])){
        return res.status(404).json({message: "Not found"});
      }
      return res.status(200).json({message: "Login successfully"});
    } catch (error) {
      return res.status(500).json(error)
    }
  }

}

module.exports = reflectionController;



























// static async deleteUser(req, res) {
//   try {
//     const id = req.params.id;
//     await db.query(`DELETE FROM users WHERE email=$1;`, [parseInt(id)]);
//     return res.send("succes remove " + email).status(200);
//   } catch (error) {
//     res.send(error);
//     return res.status(400).json({ status: "failed", message: error.code });
//   }
// }
