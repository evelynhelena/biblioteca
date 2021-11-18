import database from "../config/ConfigDB.js";

async function insertAutor(nome,nascimento,nacionalidade){
    const conn = await database.connect();
    const sql = `call pc_insertAutor(?,?,?)`;
    const newAutor = [nome,nascimento,nacionalidade];
    conn.query(sql,newAutor);
    conn.end();
}

async function findAll(){
    const conn = await database.connect();
    const sql = `select * from tbl_autor where autor_deletado = 0`;
    const [rows] = await conn.query(sql);
    conn.end();
    return rows;
}

async function updateAutor(nome,nascimento,nacionalidade,id){
    const conn = await database.connect();
    const sql = `call pc_updateAutor(?,?,?,?)`;
    const data = [nome,nascimento,nacionalidade,id];
    await conn.query(sql,data);
    conn.end();
}



export default {insertAutor,findAll,updateAutor};