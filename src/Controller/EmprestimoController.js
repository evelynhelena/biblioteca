import express from 'express';
const router = express.Router();
import db from "../Service/EmprestimoService.js";
import emprestimo from "../Service/LivroEmprestimo.js";
import {body, validationResult} from "express-validator";

router.post('/',[
    body('retirada').isDate().withMessage("Data de retirada inválida"),
    body('devolucao').isDate().withMessage("Data de devolução inválida"),
    body('codigoCliente').isNumeric().withMessage("Codigo do cliente inválido"),
    body('livros').isArray().withMessage("Livros inválidos"),
    body('livros').isLength({min: 1}).withMessage("Livros inválidos"),
 ], async (req, res) => {
    const {retirada,devolucao,codigoCliente,livros} = req.body;
    const errors = validationResult(req);
    if(!errors.isEmpty()){
      return res.status(400).send({errors:errors.array()});
    }
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

router.put('/:id',[
    body('retirada').isDate().withMessage("Data de retirada inválida"),
    body('devolucao').isDate().withMessage("Data de devolução inválida"),
    body('codigoCliente').isNumeric().withMessage("Codigo do cliente inválido"),
    body('lastBook').isNumeric().withMessage("Livro inválido"),
    body('newBook').isNumeric().withMessage("Livro inválido"),
 ], async (req, res) => {
    const {retirada,devolucao,codigoCliente,lastBook,newBook} = req.body;
    const id = req.params.id;
    const errors = validationResult(req);
    if(!errors.isEmpty()){
      return res.status(400).send({errors:errors.array()});
    }
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