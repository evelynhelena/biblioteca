import express from 'express';
const router = express.Router();
import db from "../Service/EditoraService.js";
import {cnpj} from 'cpf-cnpj-validator';
import {body, validationResult} from "express-validator";

router.post("/",[
    body('nome').isString().withMessage("Nome inválido"),
    body('nome').isLength({min: 1}).withMessage("Nome inválido"),
    body('cnpj').custom((numCnpj) => {
        const checkCnpj = cnpj.isValid(numCnpj);
        if(!checkCnpj) return Promise.reject("CNPJ não é válido");

        return true;
    }),
    body('email').isLength({min: 1}).withMessage("E-mail inválido"),
    body('email').isEmail().withMessage("E-mail inválido"),
 ],async (req,res) => {
    const {nome,cnpj,email} = req.body;
    const errors = validationResult(req);
    if(!errors.isEmpty()){
      return res.status(400).send({errors:errors.array()});
    }
    try{
        await db.insertEdidora(nome,cnpj,email);
        res.status(200).send({mensage:"Editora inserida com sucesso"});
    }catch(err){
        res.status(500).send({mensage: "Erro ao cadastrar a editora"})
    }
});

router.get("/", async (req,res) => {
    try{
        const data = await db.findAll();
        res.status(200).send(data);
    }catch(err){
        res.status(500).send({mensage: "Erro ao resgatar as editoras"});
    }
});

router.put("/:id",[
    body('nome').isString().withMessage("Nome inválido"),
    body('nome').isLength({min: 1}).withMessage("Nome inválido"),
    body('cnpj').custom((numCnpj) => {
        const checkCnpj = cnpj.isValid(numCnpj);
        if(!checkCnpj) return Promise.reject("CNPJ não é válido");

        return true;
    }),
    body('email').isLength({min: 1}).withMessage("E-mail inválido"),
    body('email').isEmail().withMessage("E-mail inválido"),
 ], async (req,res) => {
    const {nome,cnpj,email} = req.body;
    const id = req.params.id;
    const errors = validationResult(req);
    if(!errors.isEmpty()){
      return res.status(400).send({errors:errors.array()});
    }
    try{
        await db.updateEdidora(nome,cnpj,email,id);
        res.status(200).send({mensage:"Editora alterada com sucesso"});
    }catch(err){
        res.status(500).send({mensage: "Erro ao alterar a editora"})
    }
});

router.delete("/:id", async (req,res) => {
    const id = req.params.id;
    try{
        await db.deleteEdidora(id);
        res.status(200).send({mensage:"Editora deletada com sucesso"});
    }catch(err){
        res.status(500).send({mensage: "Erro ao deletar a editora"})
    }
});

export default router;