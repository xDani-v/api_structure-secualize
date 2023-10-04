import express from 'express';
import { getAll, getcuenta, createcuenta, updatecuenta, deletecuenta } from "../controllers/cuenta.controller.js";

const router = express.Router();

router.get('/', getAll);
router.get('/:id', getcuenta);
router.post('/', createcuenta);
router.put('/:id', updatecuenta);
router.delete('/:id', deletecuenta);

export default router;