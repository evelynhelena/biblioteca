import express from 'express';
const router = express.Router();
import db from "../Service/EmprestimoService.js";

router.post('/', async (req, res) => {
    const {retirada,devolucao,codigoCliente} = req.body;
    try{
        const data = await db.insertEprestimo(retirada,devolucao,codigoCliente);
        res.status(200).send({mensage: "Emprestimo inserido com sucesso",emprestimo:data});
    }catch(err){
        res.status(500).send({mensage: "Erro ao inserir o emprestimo"});
    }
});

router.put('/:id', async (req, res) => {
    const {retirada,devolucao,codigoCliente} = req.body;
    const id = req.params.id;
    try{
        await db.updateEprestimo(retirada,devolucao,codigoCliente,id);
        res.status(200).send({mensage: "Emprestimo atualizado com sucesso"})
    }catch(err){
        res.status(500).send({mensage: "Erro ao atualizar o emprestimo"});
    }
});

export default router;