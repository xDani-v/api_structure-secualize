import express from 'express';
import { getAll, getcliente, createcliente, updatecliente, deletecliente } from "../controllers/cliente.controller.js";

const router = express.Router();

router.get('/', getAll);
router.get('/:id', getcliente);
router.post('/', createcliente);
router.put('/:id', updatecliente);
router.delete('/:id', deletecliente);

export default router;