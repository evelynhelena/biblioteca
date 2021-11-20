import express from 'express';
const router = express.Router();
import db from "../Service/LivroService.js";

router.post("/", async (req,res) =>{
    const {nome,dataPublicacao,paginas,valor,codCategoria,codEditora} = req.body;
    try{
        await db.insertLivro(nome,dataPublicacao,paginas,valor,codCategoria,codEditora);
        res.status(200).send({mensage:"Livro inserido com sucesso"});
    }catch(err){
        res.status(500).send({mensage:"Erro ao inserir o livro"});
    }
});

router.get("/", async (req, res) => {
    try{
        const data = await db.findAll();
        res.status(200).send(data);
    }catch(err){
        res.status(500).send({message:"Erro ao resgatar os livros"});
    }
});

router.put("/:id", async (req, res) => {
    const {nome,dataPublicacao,paginas,valor,codCategoria,codEditora} = req.body;
    const id = req.params.id;
    try{
        await db.updateLivro(nome,dataPublicacao,paginas,valor,codCategoria,codEditora,id);
        res.status(200).send({mensage: "Livro alterado com sucesso"});
    }catch(err){
        res.status(500).send({mensage: "Erro ao alterar o livro"});
    }
});

router.delete("/:id", async (req, res) => {
    const id = req.params.id;
    try{
        await db.deleteLivro(id);
        res.status(200).send({mensage: "Livro deletado com sucesso"});
    }catch(err){
        res.status(200).send({mensage: "Erro ao deletar o livro"});
    }
})

export default router;