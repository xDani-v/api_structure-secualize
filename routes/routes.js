import express from 'express';
import { getAll, getBook, createBook, updateBook, deleteBook } from "../controllers/controller.js";

const router = express.Router();

router.get('/', getAll);
router.get('/:id', getBook);
router.post('/', createBook);
router.put('/:id', updateBook);
router.delete('/:id', deleteBook);

export default router;