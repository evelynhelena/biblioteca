import express from 'express';
const router = express.Router();
import db from "../Service/CategoriaService.js";

router.post("/", async (req,res) => {
    const {nome} = req.body;
    try{
      await db.insertCategoria(nome);
      res.status(200).send({mensage: "Categoria inserida com sucesso"});
    }catch(err){
      res.status(500).send({mensage:"Erro ao inserir a categoria",err:err});
    }
});

router.get("/", async (req,res) => {
  try{
    const data = await db.findAll();
    res.status(200).send(data);
  }catch(err){
    res.status(500).send({mensage: "Erro ao resgatar as categorias",err:err});
  }
})

router.put("/:id", async (req,res) => {
  const {nome} = req.body;
  const id = req.params.id;
  try{
    await db.updateCategoria(nome,id);
    res.status(200).send({mensage: "Categoria alterado com sucesso"});
  }catch(err){
    res.status(500).send({mensage: "Erro ao alterrar a categoria",err:err});
  }
})


router.delete("/:id", async (req,res) => {
  const id = req.params.id;
  try{
    await db.deleteCategoria(id);
    res.status(200).send({mensage: "Categoria deletada com sucesso"});
  }catch(err){
    res.status(500).send({mensage: "Erro ao deletar a categoria",err:err});
  }
})

export default router;