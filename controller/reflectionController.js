const { json } = require('express');
const db = require('../config/db');

class reflectionController{
  // 
  static async getAllReflection(req, res){
    try {
      const owner_id = res.dataUser.id;
      let result = await db.query(
        `select * from reflections where owner_id = ($1) ORDER BY id ASC;`, [owner_id]
      );
      let results = result.rows;
      return res.status(200).json(results);
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  static async getReflectionById(req, res){
    try{
      const id = req.params.id;
      const dataReflectionId = await db.query(
        `SELECT * FROM reflections where id=($1);`, [id]
      );
      return res.status(200).json(dataReflectionId.rows[0]);
    }catch(error){
      res.status(500).json(error);
    } 
  }

  static async createReflection(req, res){
    try {
      const {success, low_point, take_away} = req.body;
      const created_date = new Date();
      const modified_date = new Date();
      const owner_id = res.dataUser.id;

      if(!success || !low_point || !take_away ){
        return res.status(400).json("Failed To Create Reflection");
      }

      await db.query(
        `INSERT INTO reflections (success, low_point, take_away, owner_id, created_date, modified_date) VALUES ($1, $2, $3, $4, $5, $6);`,
        [success, low_point, take_away, owner_id, created_date, modified_date]
      );
      return res.status(201).json({message: "Reflection Created Successfully"})
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  static async editReflectionById(req, res){
    try {
      const {success, low_point, take_away} = req.body;
      const id = req.params.id;
      const modified_date = new Date();
      
      if(!success || !low_point || !take_away ){
        return res.status(400).json("Failed To Create Reflection");
      }

      await db.query(
        `UPDATE reflections SET success=$1,low_point=$2, take_away=$3, modified_date=$4 WHERE id=$5;`,
        [success, low_point, take_away, modified_date, id]
      );
      return res.status(200).json({message: "Reflection Updated Successfully"});
      
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  static async deleteReflectionById(req, res){
    try {
      const {id} = req.params;
      await db.query(
        `DELETE FROM reflections WHERE id=$1;`,[id]
      );
      return res.status(200).json({message: "Delete Successfully"});
    } catch (error) {
      return res.status(500).json(error);
    }
  }
}

module.exports = reflectionController;
