import pool from '../db/connect.ts';

export const getAllUsers = async () => {
    const result = await pool.query('SELECT * FROM public.users');
    return result.rows;
};
export const getUserByIdFromDB = async (id: string) => {
    const result = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
    return result.rows[0]; // Un seul utilisateur
};
