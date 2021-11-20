import database from "../Config/ConfigDB.js";

async function insertLivro(nome,dataPublicacao,paginas,valor,codCategoria,codEditora){
    const conn = await database.connect();
    const sql = "call pc_insertLivro(?,?,?,?,?,?)";
    const newLivro = [nome,dataPublicacao,paginas,valor,codCategoria,codEditora];
    await conn.query(sql,newLivro);
    conn.end();
}

async function findAll(){
    const conn = await database.connect();
    const sql = "select * from vw_livro_editora_categoria";
    const [rows] = await conn.query(sql);
    conn.end();
    return rows;
}

async function updateLivro(nome,dataPublicacao,paginas,valor,codCategoria,codEditora,codigo){
    const conn = await database.connect();
    const sql = "call pc_UpdateLivro(?,?,?,?,?,?,?)";
    const data = [nome,dataPublicacao,paginas,valor,codCategoria,codEditora,codigo];
    await conn.query(sql,data);
    conn.end();
}

async function deleteLivro(codigo){
    const conn = await database.connect();
    const sql = "update tbl_livros set livro_deletado = 1 where codigo_livro = ?";
    await conn.query(sql,codigo);
    conn.end();
}

export default {insertLivro,findAll,updateLivro,deleteLivro};