import express from 'express';
import { getAll, getprestamos, createprestamos, updateprestamos, deleteprestamos } from "../controllers/prestamos.controller.js";

const router = express.Router();

router.get('/', getAll);
router.get('/:id', getprestamos);
router.post('/', createprestamos);
router.put('/:id', updateprestamos);
router.delete('/:id', deleteprestamos);

export default router;