import express from 'express';
const router = express.Router();
import db from "../Service/UserService.js";

router.post('/', async (req, res) => {
    const {userName,name,email,password} = req.body;
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

router.put('/:id', async (req, res) => {
    const {userName,name,email,password} = req.body;
    const id = req.params.id;
    try{
        await db.updateUser(userName,name,email,password,id);
        res.status(200).send({mensage:"Usuário alterado com sucesso"});
    }catch(err){
        res.status(200).send({mensage:"Erro ao alterar o usuário"});
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