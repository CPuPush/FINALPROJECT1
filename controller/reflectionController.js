const db = require('../config/db');

class reflectionController{
  // 
  static async getAllReflection(req, res){
    try {
      const idUser = res.dataUser.id;
      console.log(idUser);
      let result = await db.query(
        `select * from reflections where owner_id = ($1);`, [idUser]
      );
      let results = result.rows;
      res.status(200).json(results);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async getReflectionById(req, res){
    try{
      const id = req.params.id;
      const dataReflectionId = await db.query(
        `SELECT * FROM reflections where id=($1);`, [id]
      );
      res.status(200).json(dataReflectionId.rows[0]);
    }catch(error){
      res.status(500).json(error);
    } 
  }

  static async createReflection(req, res){
    try {
      
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

module.exports = reflectionController;
