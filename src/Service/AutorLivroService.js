import database from "../Config/ConfigDB.js";

async function insertAutorLivro(codigo_autor,codigo_livro){
    const conn = await database.connect();
    const sql = "call pc_insertAutorLivro (?,?)";
    const newAutorLivro = [codigo_autor,codigo_livro];
    await conn.query(sql,newAutorLivro);
    conn.end();
}


async function updateAutorLivro(codigo_autor,codigo_livro,codigo){
    const conn = await database.connect();
    const sql = "call pc_updateAutorLivro(?,?,?)";
    const data = [codigo_autor,codigo_livro,codigo];
    await conn.query(sql,data);
    conn.end();
}

export default {insertAutorLivro,updateAutorLivro};