import { Router } from 'express';
import { CreateUserController } from '../controllers/create-user.controller';
import { FindUserIdController } from '../controllers/find-user-id.controller';
import { FindUserEmailController } from '../controllers/find-user-email.controller';
import { UpdateUserController } from '../controllers/update-user.controller';
import { DeleteUserController } from '../controllers/delete-user.controller';
import { LoginUserController } from '../controllers/login-user.controller';
import { ProfileUserController } from '../controllers/profile-user.controller';

const router = Router();

const createUserController = new CreateUserController();
const findUserIdController = new FindUserIdController();
const findUserEmailController = new FindUserEmailController();
const updateUserController = new UpdateUserController();
const deleteUserController = new DeleteUserController();

router.get('/users/:id', findUserIdController.handle);
router.get('/users', findUserEmailController.handle);
router.post('/users', createUserController.handle);
router.put('/users/:id', updateUserController.handle);
router.delete('/users/:id', deleteUserController.handle);

const loginUserController = new LoginUserController();
const profileUserController = new ProfileUserController();

router.post('/login', loginUserController.handle);
router.get('/profile', profileUserController.handle);

export { router as userRoutes };
