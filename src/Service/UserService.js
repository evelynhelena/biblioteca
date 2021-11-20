import database from "../Config/ConfigDB.js";

async function inserUser(userName,name,email,password){
    const conn = await database.connect();
    const sql = "call pc_insertUser(?,?,?,?)";
    const newUser = [userName,name,email,password];
    await conn.query(sql, newUser);
    conn.end();
}

async function findAll(){
    const conn = await database.connect();
    const sql = "select * from vw_user";
    const [rows] = await conn.query(sql);
    conn.end();
    return rows;
}

async function updateUser(userName,name,email,password,codigo){
    const conn = await database.connect();
    const sql = "call pc_updateUser(?,?,?,?,?)";
    const data = [userName,name,email,password,codigo];
    await conn.query(sql,data);
    conn.end();
}

async function deleteUser(codigo){
    const conn = await database.connect();
    const sql = "update tbl_user set user_deletado = 1 where codigo_user = ?";
    await conn.query(sql,codigo);
    conn.end();
}

export default {inserUser,findAll,updateUser,deleteUser};