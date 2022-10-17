const db = require("../config/db");

class reflectionController {
  static async getUsers(req, res) {
    db.query("SELECT * FROM Users", (error, results) => {
      if (error) {
        return res.status(400).json({ status: "failed", message: error.code });
      }

      const users = results.rows.map((user) => {
        return {
          id: user.id,
          email: user.email,
        };
      });

      res.status(200).json(users);
    });
  }

  static async register(req, res) {
    try {
      const { email, password } = req.body;

      await db.query(
        `INSERT INTO users (email, password) VALUES ($1, $2);`,
        [email, password],
        (error) => {
          if (error) {
            return res
              .status(400)
              .json({ status: "failed", message: error.code });
          }
        }
      );
      return res.send("Register succesfully").status(201);
    } catch (error) {
      return res.send(error);
    }
  }

  static async deleteUser(req, res) {
    try {
      const id = req.params.id;
      await db.query(`DELETE FROM users WHERE email=$1;`, [parseInt(id)]);
      return res.send("succes remove " + email).status(200);
    } catch (error) {
      res.send(error);
      return res.status(400).json({ status: "failed", message: error.code });
    }
  }
}

module.exports = reflectionController;
