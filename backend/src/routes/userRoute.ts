import express from 'express';
import { getUsers, getUserById, createUser } from '../controller/userController.ts';

const router = express.Router();

// GET /users
router.get('/', getUsers);

// GET /users/:id
router.get('/:id', getUserById);

// POST /users
router.post('/', createUser);

export default router;

