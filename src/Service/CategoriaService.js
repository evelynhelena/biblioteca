import database from "../config/ConfigDB.js";

async function insertCategoria(nome){
  const conn = await database.connect();
  const sql = "call pc_insrtCategoria(?)";
  await conn.query(sql,nome);
  conn.end();
}

async function findAll(){
  const conn =  await database.connect();
  const sql = "select * from tbl_categoria where categoria_deletada = 0";
  const [rows] = await conn.query(sql);
  conn.end();
  return rows;
}

async function updateCategoria(nome,id){
  const conn = await database.connect();
  const sql = "call pc_updateCategoria(?,?)";
  const data = [nome,id];
  await conn.query(sql,data);
  conn.end();
}

async function deleteCategoria(id){
  const conn = await database.connect();
  const sql = "update tbl_categoria set categoria_deletada = 1 where codigo_categoria = ?";
  await conn.query(sql,id);
  conn.end();
}

export default {insertCategoria,findAll,updateCategoria,deleteCategoria};