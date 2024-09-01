const pool = require("./database.model");
const bcrypt = require("bcryptjs");

const getUserByEmail = async (email) => {
  try {
    const query = "SELECT * FROM usuarios WHERE email = $1";
    const values = [email];
    const { rows } = await pool.query(query, values);

    if (rows.length === 0) {
      throw { code: 404, message: "User not found" };
    }

    return rows[0];
  } catch (error) {
    throw {
      code: error.code || 500,
      message: error.message || "Error retrieving user",
    };
  }
};

const getUserById = async (id) => {
  const result = await pool.query("SELECT * FROM usuarios WHERE id = $1", [id]);

  return result.rows[0];
};

const registerUser = async (user) => {
  let { email, password, rol, lenguage } = user;
  const encriptedPassword = bcrypt.hashSync(password);
  password = encriptedPassword;
  const values = [email, encriptedPassword, rol, lenguage];
  const query = "INSERT INTO usuarios VALUES (DEFAULT, $1, $2, $3, $4)";

  await pool.query(query, values);
};

module.exports = { getUserById, getUserByEmail, registerUser };
