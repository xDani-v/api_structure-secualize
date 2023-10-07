import express from 'express';
import { getAll, gettarjeta, createtarjeta, updatetarjeta, deletetarjeta } from "../controllers/tarjeta.controller.js";

const router = express.Router();

router.get('/', getAll);
router.get('/:id', gettarjeta);
router.post('/', createtarjeta);
router.put('/:id', updatetarjeta);
router.delete('/:id', deletetarjeta);

export default router;