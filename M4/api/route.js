import express from 'express';

import mensagem from "./mensagem.js"

const router = express.Router();

router.use("/mensagem", mensagem)

export default router