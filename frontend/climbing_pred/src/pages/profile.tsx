import { useState, useEffect } from "react";
import { getUserById } from "../fetchApi/userApi";
import type { User } from "../types/userType";

export default function Profile() {
    const [error, setError] = useState<string | null>(null);
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const userId = "1"; // Replace with actual ID from context or route
                const data = await getUserById(userId);
                setUser(data);
            } catch (err) {
		console.log(err)
                setError("Erreur lors du chargement de l'utilisateur");
            }
        };
        fetchUser();
    }, []);

    if (error) return <p>{error}</p>;
    if (!user) return <p>Chargement...</p>; // Add loading state

    return (
        <div>
            Hello {user.username}
        </div>
    );
}

