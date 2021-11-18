import express from "express";
const router = express.Router();
import client from "./Controller/ClienteController.js";
import editora from "./Controller/EditoraController.js";
import autor from "./Controller/AutorController.js";

router.use("/client",client);
router.use("/editora",editora);
router.use("/autor",autor);


router.use('/',(req, res) => {
    res.status(200).send({message: "Achou"});
});

router.use('/*',(req, res) => {
    res.status(404).send({message: "Caminho Não Encontrado"});
});

export default router;