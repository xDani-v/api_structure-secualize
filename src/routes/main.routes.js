import express from 'express';
import cliente from "../routes/cliente.routes.js";
import cuenta from "../routes/cuenta.routes.js";
import movimientos from "../routes/movimientos.routes.js";
import prestamos from "../routes/prestamos.routes.js";
import tarjeta from "../routes/tarjeta.routes.js";

const router = express.Router();

router.use('/cliente', cliente);
router.use('/cuenta', cuenta);
router.use('/movimientos', movimientos);
router.use('/prestamos', prestamos);
router.use('/tarjeta', tarjeta);


export default router;