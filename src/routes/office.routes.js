import { Router } from 'express';
import { createOffice, getMedicOffices } from '../controllers/office.controller.js';

const router = Router();

// Routes para Office
router.post('/', createOffice);
router.get('/:medicId', getMedicOffices);

export default router;