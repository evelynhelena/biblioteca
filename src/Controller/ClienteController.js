import express from 'express';
const router = express.Router();
import {body, validationResult} from "express-validator";
import {cpf} from 'cpf-cnpj-validator';
import db from "../Service/ClienteService.js";

router.post('/',[
    body('nome').isString().withMessage("Nome inválido"),
    body('nome').isLength({min: 1}).withMessage("Nome inválido"),
    body('cpf').custom((numCpf) => {
        const checkCpf = cpf.isValid(numCpf);
        if(!checkCpf) return Promise.reject("CPF não é válido");

        return true;
    }),
    body('date_nasc').isDate().withMessage("Data de nascimento inválida"),
    body('email').isLength({min:1}).withMessage("E-Mail inválido"),
    body('email').isEmail().withMessage("E-Mail inválido"),
], async (req, res) => {
    const {nome,cpf,date_nasc,email} = req.body;
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).send({errors: errors.array()});
    }
    try{
        await db.insertClient(nome,cpf,date_nasc,email);
        res.status(200).send({message:"Cliente inserido com sucesso"});
    }catch(err){
        res.status(500).send({message:"Erro ao inserir o cliente"});
    }
});

router.get('/', async (req, res) => {
    try{
        const data = await db.findAllClient();
        res.status(200).send(data);
    }catch(err){
        res.status(500).send({message:"Erro ao resgatar os clientes"});
    }
});

router.put('/:id',[
    body('nome').isString().withMessage("Nome inválido"),
    body('nome').isLength({min: 1}).withMessage("Nome inválido"),
    body('cpf').custom((numCpf) => {
        const checkCpf = cpf.isValid(numCpf);
        if(!checkCpf) return Promise.reject("CPF não é válido");

        return true;
    }),
    body('date_nasc').isDate().withMessage("Data de nascimento inválida"),
    body('email').isLength({min:1}).withMessage("E-Mail inválido"),
    body('email').isEmail().withMessage("E-Mail inválido"),
    ] ,async (req, res) => {
    const {nome,cpf,date_nasc,email} = req.body;
    const id = req.params.id;
    
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).send({errors: errors.array()});
    }
    try{
        await db.updateClient(nome,cpf,date_nasc,email,id)
        res.status(200).send({message:"Cliente alterado com sucesso"});
    }catch(err){
        res.status(500).send({message:"Erro ao alterar o clientes"});
    }
});

router.delete('/:id',async (req, res) => {
    const id = req.params.id;
    try{
        await db.deleteClient(id)
        res.status(200).send({message:"Cliente deletado com sucesso"});
    }catch(err){
        res.status(500).send({message:"Erro ao deletar o cliente"});
    }
});

export default router;