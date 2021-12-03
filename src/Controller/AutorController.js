import express from 'express';
const router = express.Router();
import db from "../Service/AutorService.js";
import {body, validationResult} from "express-validator";

router.post("/",[
    body('nome').isString().withMessage("Nome inválido"),
    body('nome').isLength({min: 1}).withMessage("Nome inválido"),
    body('nascimento').isDate().withMessage("Data de nascimento inválida"),
    body('nacionalidade').isString().withMessage("Nacionalidade inválida"),
], async (req,res) => {
    const {nome,nascimento,nacionalidade} = req.body;
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).send({errors: errors.array()})
    }
    try{
        await db.insertAutor(nome,nascimento,nacionalidade);
        res.status(200).send({mensage: "Autor inserido com sucesso"});
    }catch{
        res.status(500).send({mensage: "Erro ao inserir o autor"});
    }
});

router.get("/", async (req,res) => {
    try{
        const data = await db.findAll();
        res.status(200).send(data);
    }catch{
        res.status(500).send({mensage: "Erro ao resgatar os autores"});
    }
});

router.put("/:id",[
    body('nome').isString().withMessage("Nome inválido"),
    body('nome').isLength({min: 1}).withMessage("Nome inválido"),
    body('nascimento').isDate().withMessage("Data de nascimento inválida"),
    body('nacionalidade').isString().withMessage("Nacionalidade inválida"),
    ] ,async (req,res) => {
    const {nome,nascimento,nacionalidade} = req.body;
    const id = req.params.id;
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).send({errors: errors.array()})
    }
    try{
        await db.updateAutor(nome,nascimento,nacionalidade,id);
        res.status(200).send({mensage: "Autor alterado com sucesso"});
    }catch(err){
        res.status(500).send({mensage: "Erro ao alterar os autores",err: err});
    }
});

router.delete("/:id", async (req, res) =>{
    const id = req.params.id;
    try{
        await db.deleteAutor(id);
        res.status(200).send({mensage: "Autor Deletado com sucesso"});
    }catch(err){
        res.status(500).send({mensage:"Erro ao deletar o autor",err:err});
    }
});


export default router;