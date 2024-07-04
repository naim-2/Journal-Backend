import { Router } from 'express';
import { createEntry, getEntries, editJournalEntry, deleteJournalEntry } from '../controllers/journalController';
import { authMiddleware } from '../middleware/authMiddleware';

const router = Router();
router.post('/', authMiddleware, createEntry);
router.get('/', authMiddleware, getEntries);
router.put('/', authMiddleware, editJournalEntry);
router.delete('/', authMiddleware, deleteJournalEntry);

export default router;
