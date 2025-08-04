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
