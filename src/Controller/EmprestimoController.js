import express from 'express';
const router = express.Router();
import db from "../Service/EmprestimoService.js";
import emprestimo from "../Service/LivroEmprestimo.js";

router.post('/', async (req, res) => {
    const {retirada,devolucao,codigoCliente,livros} = req.body;
    try{
        const data = await db.insertEprestimo(retirada,devolucao,codigoCliente);
        emprestimo.insertLivroEmprestimo(data,livros);
        res.status(200).send({mensage: "Emprestimo inserido com sucesso"});
    }catch(err){
        res.status(500).send({mensage: "Erro ao inserir o emprestimo"});
    }
});

router.get('/', async (req, res) =>{
    try{
        const data = await db.findAll();
        res.status(200).send(data);
    }catch(err){
        res.status(500).send({mensage: "Erro listar os emprestimo"});
    }
})

router.put('/:id', async (req, res) => {
    const {retirada,devolucao,codigoCliente,lastBook,newBook} = req.body;
    const id = req.params.id;
    try{
        await db.updateEprestimo(retirada,devolucao,codigoCliente,id);
        emprestimo.updateLivroEmprestimo(id,newBook,lastBook);
        res.status(200).send({mensage: "Emprestimo atualizado com sucesso"});
    }catch(err){
        res.status(500).send({mensage: "Erro ao atualizar o emprestimo"});
    }
});

router.delete('/:id', async (req, res) =>{
    const id = req.params.id;
    try {
        await db.deleteEmprestimo(id);
        res.status(200).send({ message: "Emprestimo deletado com sucesso"});
    }catch(err){
        res.status(500).send({ message: "Erro ao deletar o emprestimo"});
    }
})

export default router;