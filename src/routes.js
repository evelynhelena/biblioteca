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
import log from "./Controller/LogLivro.js";
import {verifyJWT} from "./middlewares/jwt.js";

router.use("/client",verifyJWT,client);
router.use("/editora",verifyJWT,editora);
router.use("/autor",verifyJWT,autor);
router.use("/categoria",verifyJWT,categoria);
router.use("/livro",verifyJWT,livro);
router.use("/user",verifyJWT,user);
router.use("/login",login);
router.use("/autorLivro",verifyJWT,autorLivro);
router.use("/emprestimo",verifyJWT,emprestimo);
router.use("/log",verifyJWT,log);


router.use('/',(req, res) => {
    res.status(200).send({message: "Achou"});
});

router.use('/*',(req, res) => {
    res.status(404).send({message: "Caminho Não Encontrado"});
});

export default router;