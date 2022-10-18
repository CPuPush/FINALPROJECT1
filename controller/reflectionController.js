const { json } = require('express');
const db = require('../config/db');

class reflectionController{
  // 
  static async getAllReflection(req, res){
    try {
      const owner_id = res.dataUser.id;
      let result = await db.query(
        `select * from reflections where owner_id = ($1);`, [owner_id]
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
      const {success, low_point, take_away, created_date, modified_date} = req.body;
      const owner_id = res.dataUser.id;

      if(!success || !low_point || !take_away || !created_date || !modified_date){
        return res.status(400).json("Bad Request");
      }

      await db.query(
        `INSERT INTO reflections (success, low_point, take_away, owner_id, created_date, modified_date) VALUES ($1, $2, $3, $4, $5, $6);`,
        [success, low_point, take_away, owner_id, created_date, modified_date]
      );
      return res.status(201).json({message: "Reflection has been created"})
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  static async editReflectionById(req, res){
    try {
      const {success, low_point, take_away, created_date, modified_date} = req.body;
      const id = req.params.id;
      
      if(!success || !low_point || !take_away || !created_date || !modified_date){
        return res.status(400).json("Bad Request");
      }

      await db.query(
        `UPDATE reflections SET success=$1,low_point=$2, take_away=$3,created_date=$4, modified_date=$5 WHERE id=$6;`,
        [success, low_point, take_away, created_date, modified_date,id]
      );
      return res.status(200).json({message: "Update Reflection Successfully"});
      
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
