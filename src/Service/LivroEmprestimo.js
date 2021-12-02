import database from "../Config/ConfigDB.js";

async function insertLivroEmprestimo(CodEmprestimo,livros){
    const conn = await database.connect();
    let str = "";
    const lastValue = livros.length - 1;
    livros.forEach((livro,index) => {
        str += `(${CodEmprestimo},${livro})${lastValue !== index ? "," : ""}`;
    });
    const sql = `insert into tbl_livro_emprestimo(fk_emprestimo, fk_livro) values ${str}`;
    await conn.query(sql);
    conn.end();
}

async function updateLivroEmprestimo(CodEmprestimo,newBook,lastBook){
    const conn = await database.connect();
    const sql = `update tbl_livro_emprestimo set fk_livro = ? where fk_emprestimo = ? and fk_livro = ?`;
    const data = [newBook,CodEmprestimo,lastBook];
    await conn.query(sql,data);
    conn.end();
}

export default {insertLivroEmprestimo,updateLivroEmprestimo};