import database from "../config/ConfigDB.js";

async function insertEdidora(nome,cnpj,email){
    const conn = await database.connect();
    const sql = `call pc_insertEditora(?,?,?)`;
    const newEditora = [nome,cnpj,email];
    conn.query(sql,newEditora);
    conn.end();
}

async function findAll(){
    const conn = await database.connect();
    const sql = `select * from tbl_editora where editora_deletada = 0`;
    const [rows] = await conn.query(sql);
    conn.end();
    return rows;
}

async function updateEdidora(nome,cnpj,email,id){
    const conn = await database.connect();
    const sql = `call pc_updateEditora(?,?,?,?)`;
    const data = [nome,cnpj,email,id];
    conn.query(sql,data);
    conn.end();
}

async function deleteEdidora(id){
    const conn = await database.connect();
    const sql = `update tbl_editora set editora_deletada = 1 where codigo_editora = ?`;
    conn.query(sql,id);
    conn.end();
}

export default {insertEdidora,updateEdidora,findAll,deleteEdidora}