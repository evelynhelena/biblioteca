import database from "../config/ConfigDB.js";

async function insertClient(nome,cpf,date_nasc,email){
    const conn = await database.connect();
    const sql = `INSERT INTO bancoBiblioteca.tbl_cliente (nome_cliente, cpf_cliente, nasc_cliente, email) VALUES(?, ?, ?, ?)`;
    const newClientData = [nome,cpf,date_nasc,email];
    conn.query(sql,newClientData);
    conn.end();
}

async function findAllClient(){
    const conn = await database.connect();
    const sql = `select * from tbl_cliente tc where tc.cliente_deletado = 0`;
    const [rows] = await conn.query(sql);
    conn.end();
    return rows
}

async function updateClient(nome,cpf,date_nasc,email,codigo){
    const conn = await database.connect();
    const sql = `CALL pc_updateClient(?,?,?,?,?);`;
    const newClientData = [nome,cpf,date_nasc,email,codigo];
    await conn.query(sql,newClientData);
    conn.end();
}

async function deleteClient(codigo){
    const conn = await database.connect();
    const sql = `update tbl_cliente  SET cliente_deletado = 1 WHERE codigo_cliente = ?`;
    await conn.query(sql,codigo);
    conn.end();
}


export default {insertClient, findAllClient,updateClient,deleteClient};