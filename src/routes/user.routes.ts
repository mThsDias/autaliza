import { Router } from 'express';
import { CreateUserController } from '../controllers/create-user/create-user.controller';

const router = Router();

router.post('/user', CreateUserController.handle);

export { router as userRoutes };
