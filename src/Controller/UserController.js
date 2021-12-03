import express from 'express';
const router = express.Router();
import db from "../Service/UserService.js";
import {body, validationResult} from "express-validator";

router.post('/',[
    body('userName').isString().withMessage("Nome de usuário inválido"),
    body('userName').isLength({min: 1}).withMessage("Nome de usuário inválido"),
    body('name').isString().withMessage("Nome inválido"),
    body('name').isLength({min: 1}).withMessage("Nome inválido"),
    body('email').isEmail().withMessage("E-Mail inválido"),
    body('email').isLength({min: 1}).withMessage("E-Mail inválido"),
    body('password').isStrongPassword().withMessage("Senha Fraca")
    ], async (req, res) => {
    const {userName,name,email,password} = req.body;
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).send({errors: errors.array()});
    }
    try{
        await db.inserUser(userName,name,email,password);
        res.status(200).send({mensage:"Usuário inserido com sucesso"});
    }catch(err){
        res.status(200).send({mensage:"Erro ao inserir o usuário"});
    }
});

router.get('/', async (req, res) => {
    try{
        const data = await db.findAll();
        res.status(200).send(data);
    }catch(err){
        res.status(200).send({mensage:"Erro ao resgatar os usuários"});
    }
});

router.put('/:id',[
    body('userName').isString().withMessage("Nome de usuário inválido"),
    body('userName').isLength({min: 1}).withMessage("Nome de usuário inválido"),
    body('name').isString().withMessage("Nome inválido"),
    body('name').isLength({min: 1}).withMessage("Nome inválido"),
    body('email').isEmail().withMessage("E-Mail inválido"),
    body('email').isLength({min: 1}).withMessage("E-Mail inválido"),
    body('password').isStrongPassword().withMessage("Senha Fraca")
    ], async (req, res) => {
    const {userName,name,email,password} = req.body;
    const id = req.params.id;
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).send({errors: errors.array()});
    }
    try{
        await db.updateUser(userName,name,email,password,id);
        res.status(200).send({mensage:"Usuário alterado com sucesso"});
    }catch(err){
        res.status(200).send({mensage:"Erro ao alterar o usuário",err:err});
    }
});

router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    try{
        await db.deleteUser(id);
        res.status(200).send({mensage:"Usuário deletado com sucesso"});
    }catch(err){
        res.status(200).send({mensage:"Erro ao deletar o usuário"});
    }
});

export default router;