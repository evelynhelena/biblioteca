import express from 'express';
const router = express.Router();
import db from "../Service/LivroService.js";
import {body, validationResult} from "express-validator";

router.post("/",[
    body('nome').isString().withMessage("Nome inválido"),
    body('nome').isLength({min: 1}).withMessage("Nome inválido"),
    body('dataPublicacao').isDate().withMessage("Data de publicação inválida"),
    body('paginas').isNumeric().withMessage("Números de páginas inválida"),
    body('valor').isNumeric().withMessage("Valor inválido"),
    body('codCategoria').isNumeric().withMessage("Código da categoria inválido"),
    body('codEditora').isNumeric().withMessage("Código da editora inválido"),
], async (req,res) =>{
    const {nome,dataPublicacao,paginas,valor,codCategoria,codEditora} = req.body;
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).send({errors: errors.array()});
    }
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

router.put("/:id",[
    body('nome').isString().withMessage("Nome inválido"),
    body('nome').isLength({min: 1}).withMessage("Nome inválido"),
    body('dataPublicacao').isDate().withMessage("Data de publicação inválida"),
    body('paginas').isNumeric().withMessage("Números de páginas inválida"),
    body('valor').isNumeric().withMessage("Valor inválido"),
    body('codCategoria').isNumeric().withMessage("Código da categoria inválido"),
    body('codEditora').isNumeric().withMessage("Código da editora inválido"),
], async (req, res) => {
    const {nome,dataPublicacao,paginas,valor,codCategoria,codEditora} = req.body;
    const id = req.params.id;
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).send({errors: errors.array()});
    }
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