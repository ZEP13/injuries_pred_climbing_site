import type { Request, Response } from 'express';
import { getAllUsers, getUserByIdFromDB } from '../model/userModel.ts';

export const getUsers = async (req: Request, res: Response) => {
    try {
        const users = await getAllUsers();
        res.json(users);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Database error' });
    }
};

export const createUser = async (req: Request, res: Response) => {
    try {
        res.status(201).json({ message: 'User created (fonction non encore implémentée)' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Database error' });
    }
};

export const getUserById = async (req: Request, res: Response) => {
    const id = req.params.id;
    try {
        const user = await getUserByIdFromDB(id);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json(user);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Database error' });
    }
};

