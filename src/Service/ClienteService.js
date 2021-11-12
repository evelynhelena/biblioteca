import database from "../config/ConfigDB.js";

async function insertClient(nome,cpf,date_nasc,email){
    const conn = await database.connect();
    const sql = `INSERT INTO bancoBiblioteca.tbl_cliente (nome_cliente, cpf_cliente, nasc_cliente, email) VALUES(?, ?, ?, ?);`;
    const newClientData = [nome,cpf,date_nasc,email];
    conn.query(sql,newClientData);
    conn.end();
}

export default {insertClient};