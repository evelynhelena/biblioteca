import express from "express";
const router = express.Router();
import client from "./Controller/ClienteController.js";

router.use("/client",client);

router.use('/',(req, res) => {
    res.status(200).send({message: "Achou"});
});

router.use('/*',(req, res) => {
    res.status(404).send({message: "Caminho Não Encontrado"});
});

export default router;