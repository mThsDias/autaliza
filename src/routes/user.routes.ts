import { Router } from 'express';
import { CreateUserController } from '../controllers/create-user.controller';
import { FindUserIdController } from '../controllers/find-user-id.controller';

const router = Router();

const createUserController = new CreateUserController();
const findUserId = new FindUserIdController();

router.get('/users/:id', findUserId.handle);
router.post('/users', createUserController.handle);

export { router as userRoutes };
