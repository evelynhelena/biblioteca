import database from "../Config/ConfigDB.js";

async function insertEprestimo(retirada,devolucao,codigoCliente){
    const conn = await database.connect();
    const sql = "call pc_insertEmprestimo(?,?,?)"
    const newEmprestimo = [retirada,devolucao,codigoCliente];
    const [rows] = await conn.query(sql,newEmprestimo);
    const {codigo_emprestimo} = rows[0][0];
    conn.end();
    return codigo_emprestimo;
}

async function findAll(){
    const conn = await database.connect();
    const sql = "select * from vw_livro_emprestimo";
    const [rows] = await conn.query(sql);
    conn.end();
    return rows;
}

async function updateEprestimo(retirada,devolucao,codigoCliente,codEmprestimo){
    const conn = await database.connect();
    const sql = "call pc_updateEmprestimo(?,?,?,?)"
    const data = [retirada,devolucao,codigoCliente,codEmprestimo];
    await conn.query(sql,data)
    conn.end();
} 


async function deleteEmprestimo(id){
    const conn = await database.connect();
    const sql = "update tbl_emprestimo set emprestimo_deletado = 1 where codigo_emprestimo = ?"
    await conn.query(sql,id);
    conn.end();
}
export default {insertEprestimo,updateEprestimo,findAll,deleteEmprestimo}