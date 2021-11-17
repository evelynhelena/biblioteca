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

router.get('/', async (req, res) => {
    try{
        const data = await db.findAllClient();
        res.status(200).send(data);
    }catch(err){
        res.status(500).send({message:"Erro ao resgatar os clientes"});
    }
});

router.put('/:id', async (req, res) => {
    const {nome,cpf,date_nasc,email} = req.body;
    const id = req.params.id;
    try{
        await db.updateClient(nome,cpf,date_nasc,email,id)
        res.status(200).send({message:"Cliente alterado com sucesso"});
    }catch(err){
        res.status(500).send({message:"Erro ao alterar o clientes"});
    }
});

router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    try{
        await db.deleteClient(id)
        res.status(200).send({message:"Cliente deletado com sucesso"});
    }catch(err){
        res.status(500).send({message:"Erro ao deletar o cliente"});
    }
});

export default router;