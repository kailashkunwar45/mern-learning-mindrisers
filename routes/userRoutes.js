import express from 'express';
import { loginUser, registerUser } from '../controllers/userController.js';


const router = express.Router();

router.route('/users/login').post(loginUser);
router.route('/users/register').post(registerUser);



export default router;