import { Router } from 'express';
import { createEntry, getEntries } from '../controllers/journalController';
import { authMiddleware } from '../middleware/authMiddleware';

const router = Router();
router.post('/', authMiddleware, createEntry);
router.get('/', authMiddleware, getEntries);

export default router;
