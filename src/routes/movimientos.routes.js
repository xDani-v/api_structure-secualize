import express from 'express';
import { getAll, getmovimientos, createmovimientos, updatemovimientos, deletemovimientos } from "../controllers/movimientos.controller.js";

const router = express.Router();

router.get('/', getAll);
router.get('/:id', getmovimientos);
router.post('/', createmovimientos);
router.put('/:id', updatemovimientos);
router.delete('/:id', deletemovimientos);

export default router;