import axios from "axios";
import type { User } from "../types/userType.ts";

const API_URL = import.meta.env.VITE_API_URL;

export const fetchAllUsers = async (): Promise<User[]> => {
    try {
        const res = await axios.get<User[]>(`${API_URL}/users`);
        return res.data;
    } catch (err) {
        console.error("Erreur dans fetchAllUsers:", err);
        throw new Error("Impossible de récupérer les utilisateurs");
    }
};

export const getUserById = async (id_user: string): Promise<User> => {
    try {
        const res = await axios.get<User>(`${API_URL}/users/${id_user}`);
        return res.data;
    }
    catch (err) {
        console.log("Aucun user avec cette id", err)
        throw new Error("Impossible de recuperer l'user par id")
    }
} 
