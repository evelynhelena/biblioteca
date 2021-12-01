import database from "../Config/ConfigDB.js";

async function insertLivroEmprestimo(CodEmprestimo,livros){
    const conn = await database.connect();

    let str = "";
    livros.forEach(livro => {
        str += `(${CodEmprestimo},${livro}),`
    });
    
    const sql = "insert into tbl"
    const newEmprestimo = [retirada,devolucao,codigoCliente];
    await conn.query(sql,newEmprestimo);
    conn.end();
}
