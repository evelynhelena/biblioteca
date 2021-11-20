import express from 'express';
const router = express.Router();
import db from "../Service/EditoraService.js";

router.post("/", async (req,res) => {
    const {nome,cnpj,email} = req.body;
    try{
        await db.insertEdidora(nome,cnpj,email);
        res.status(200).send({mensage:"Editora inserida com sucesso"});
    }catch(err){
        res.status(500).send({mensage: "Erro ao cadastrar a editora"})
    }
});

router.get("/", async (req,res) => {
    try{
        const data = await db.findAll();
        res.status(200).send(data);
    }catch(err){
        res.status(500).send({mensage: "Erro ao resgatar as editoras"});
    }
});

router.put("/:id", async (req,res) => {
    const {nome,cnpj,email} = req.body;
    const id = req.params.id;
    try{
        await db.updateEdidora(nome,cnpj,email,id);
        res.status(200).send({mensage:"Editora alterada com sucesso"});
    }catch(err){
        res.status(500).send({mensage: "Erro ao alterar a editora"})
    }
});

router.delete("/:id", async (req,res) => {
    const id = req.params.id;
    try{
        await db.deleteEdidora(id);
        res.status(200).send({mensage:"Editora deletada com sucesso"});
    }catch(err){
        res.status(500).send({mensage: "Erro ao deletar a editora"})
    }
});

export default router;