import database from "../Config/ConfigDB.js";

async function login(userName, password) {
    const conn = await database.connect();
    const sql = "call pc_selectUser(?,?)";
    const data = [userName, password];
    const [rows] = await conn.query(sql,data);
    conn.end();
    return rows[0];
}

export default {login};