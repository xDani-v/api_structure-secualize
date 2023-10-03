import express from 'express';
import { getAll, getLogin, createLogin, updateLogin, deleteLogin } from "../controllers/login.controller.js";

const router = express.Router();

router.get('/', getAll);
router.get('/:id', getLogin);
router.post('/', createLogin);
router.put('/:id', updateLogin);
router.delete('/:id', deleteLogin);

export default router;