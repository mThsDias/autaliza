import { Router } from 'express';
import { CreateUserController } from '../controllers/create-user.controller';
import { FindUserIdController } from '../controllers/find-user-id.controller';
import { FindUserEmailController } from '../controllers/find-user-email.controller';

const router = Router();

const createUserController = new CreateUserController();
const findUserId = new FindUserIdController();
const findUserEmail = new FindUserEmailController();

router.get('/users/:id', findUserId.handle);
router.get('/users', findUserEmail.handle);
router.post('/users', createUserController.handle);

export { router as userRoutes };
