import express from 'express';
import * as montadora from '../controllers/montadoraController.js';

const router = express.Router();

router.get('/montadora',montadora.consultar);
router.get('/montadora',montadora.consultarTodos);
router.post('/montadora',montadora.cadastrar);

export default router;