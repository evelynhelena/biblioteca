import express from 'express';
const router = express.Router();
import db from "../Service/AutorLivroService.js";

router.post('/', async (req, res) => {
    const {codigo_autor,codigo_livro} = req.body;
    try{
        await db.insertAutorLivro(codigo_autor,codigo_livro);
        res.status(200).send({mensage: "Libro vinculado a autor de forma correta"})
    }catch(err){
        res.status(500).send({mensage: "Erro ao inserir o autor livro"});
    }
});

router.put('/:id', async (req, res) => {
    const {codigo_autor,codigo_livro} = req.body;
    const id = req.params.id;
    try{
        await db.updateAutorLivro(codigo_autor,codigo_livro,id);
        res.status(200).send({mensage: "Autor do livro alterar com sucesso"})
    }catch(err){
        res.status(500).send({mensage: "Erro ao alterar o autor do livro",err:err});
    }
});

export default router;