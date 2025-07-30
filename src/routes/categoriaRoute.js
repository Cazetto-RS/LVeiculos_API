import express from 'express';
import * as categoria from '../controllers/categoriaController.js';

const router = express.Router();

router.get('/categoria',categoria.consultar);
router.get('/categoria',categoria.consultarTodos);
router.post('/categoria',categoria.cadastrar);

export default router;