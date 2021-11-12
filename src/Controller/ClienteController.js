import express from 'express';
const router = express.Router();
import db from "../Service/ClienteService.js";

router.post('/', async (req, res) => {
    const {nome,cpf,date_nasc,email} = req.body;
    try{
        await db.insertClient(nome,cpf,date_nasc,email);
        res.status(200).send({message:"Cliente inserido com sucesso"});
    }catch(err){
        res.status(500).send({message:"Erro ao inserir o cliente"});
    }
});

export default router;