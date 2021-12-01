import express from "express";
const router = express.Router();
import client from "./Controller/ClienteController.js";
import editora from "./Controller/EditoraController.js";
import autor from "./Controller/AutorController.js";
import categoria from "./Controller/CategoriaController.js";
import livro from "./Controller/LivroController.js";
import user from "./Controller/UserController.js";
import login from "./Controller/LoginController.js";
import autorLivro from "./Controller/AutorLivroController.js";
import emprestimo from "./Controller/EmprestimoController.js";

router.use("/client",client);
router.use("/editora",editora);
router.use("/autor",autor);
router.use("/categoria",categoria);
router.use("/livro",livro);
router.use("/user",user);
router.use("/login",login);
router.use("/autorLivro",autorLivro);
router.use("/emprestimo",emprestimo);


router.use('/',(req, res) => {
    res.status(200).send({message: "Achou"});
});

router.use('/*',(req, res) => {
    res.status(404).send({message: "Caminho Não Encontrado"});
});

export default router;