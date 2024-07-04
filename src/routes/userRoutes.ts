import { Router } from 'express';
import { updateUser } from '../controllers/userController';
import { authMiddleware } from '../middleware/authMiddleware';

const router = Router();

router.use(authMiddleware);

router.put('/', updateUser);

export default router;
