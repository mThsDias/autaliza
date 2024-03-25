import { Router } from 'express';
import { FindUserIdController } from '../controllers/find-user-id.controller';
import { FindUserEmailController } from '../controllers/find-user-email.controller';
import { UpdateUserController } from '../controllers/update-user.controller';
import { DeleteUserController } from '../controllers/delete-user.controller';
import { LoginUserController } from '../controllers/login-user.controller';
import { ProfileUserController } from '../controllers/profile-user.controller';
import { authMiddleware } from '../middlewares/authMiddleware';
import { CreateUserController } from '../controllers/create-user.controller';
import { ForgotPasswordController } from '../controllers/forgot-password.controller';
import { ResetPasswordController } from '../controllers/reset-password.controller';

const router = Router();

const createUserController = new CreateUserController();
const findUserIdController = new FindUserIdController();
const findUserEmailController = new FindUserEmailController();
const updateUserController = new UpdateUserController();
const deleteUserController = new DeleteUserController();
const loginUserController = new LoginUserController();
const profileUserController = new ProfileUserController();
const forgotPasswordController = new ForgotPasswordController();
const resetPasswordController = new ResetPasswordController();

router.get('/users/:id', findUserIdController.handle);
router.get('/users', findUserEmailController.handle);
router.post('/create', createUserController.handle);
router.put('/users/:id', updateUserController.handle);
router.delete('/users/:id', deleteUserController.handle);
router.post('/login', loginUserController.handle);
router.get('/profile', authMiddleware, profileUserController.handle);
router.post('/forgot-password', forgotPasswordController.handle);
router.post('/reset-password/:token', resetPasswordController.handle);

export { router as userRoutes };
