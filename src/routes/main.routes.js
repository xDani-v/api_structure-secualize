import express from 'express';
import login from "../routes/login.routes.js";
import cuenta from "../routes/cuenta.routes.js";

const router = express.Router();

router.use('/login', login);
router.use('/cuenta', cuenta);

export default router;