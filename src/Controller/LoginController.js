import express from 'express';
const router = express.Router();
import db from "../Service/LoginService.js";
import {body, validationResult} from "express-validator";

router.post('/',[
    body('userName').isString().withMessage("Nome de usuário inválido"),
    body('userName').isLength({min: 1}).withMessage("Nome de usuário inválido"),
    body('password').isString().withMessage("Senha inválida"),
    body('password').isLength({min: 1}).withMessage("Senha inválida"),
], async (req, res) => {
    const {userName, password} = req.body;
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).send({errors: errors.array()});
    }
    try{
        const userFind = await db.login(userName, password);
        if(userFind.length > 0){
            res.status(200).send(userFind);
        }else{
            res.status(401).send({message: "Usuário ou senha incorreto"});
        }
    }catch(err){
        res.status(500).send({message: "Erro ao fazer o login"});
    }
});

export default router;