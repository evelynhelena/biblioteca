import express from 'express';
const router = express.Router();
import db from "../Service/LogLivro.js";

router.get("/", async (req,res) => {
    try{
        const data = await db.findAll();
        res.status(200).send(data);
    }catch{
        res.status(500).send({mensage: "Erro ao resgatar os logs"});
    }
});

export default router;