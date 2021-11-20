import express from 'express';
const router = express.Router();
import db from "../Service/LoginService.js";

router.post('/', async (req, res) => {
    const {userName, password} = req.body;
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