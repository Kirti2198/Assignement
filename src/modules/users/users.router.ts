import express from 'express';
import userController from './users.controller';

const router = express.Router();
router.get('/', userController.search);
export default router;
