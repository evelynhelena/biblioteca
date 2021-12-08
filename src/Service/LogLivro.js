import database from "../Config/ConfigDB.js";

async function findAll(){
    const conn = await database.connect();
    const sql = "select * from tbl_log tl";
    const [rows] = await conn.query(sql);
    conn.end();
    return rows;
}
export default {findAll};