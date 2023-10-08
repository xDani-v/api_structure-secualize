import express from 'express';
import { getAll, getcliente, createcliente, updatecliente, deletecliente, authenticate } from "../controllers/cliente.controller.js";

const router = express.Router();

router.get('/', getAll);
router.get('/:id', getcliente);
router.post('/', createcliente);
router.put('/:id', updatecliente);
router.delete('/:id', deletecliente);
router.post('/authenticate', authenticate);

export default router;