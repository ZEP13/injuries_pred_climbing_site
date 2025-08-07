import { useEffect, useState } from "react";
import { formatDate } from "../utils/formatDate";
import { fetchAllUsers } from "../fetchApi/userApi";
import type { User } from "../types/userType";

export default function Page1() {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadUsers = async () => {
            try {
                const data = await fetchAllUsers();
                setUsers(data);
            } catch (err) {
                console.log(err)
                setError("Erreur lors du chargement des utilisateurs");
            } finally {
                setLoading(false);
            }
        };
        loadUsers();
    }, []);

    if (loading) return <p>Chargement...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            <h1>My users</h1>
            {users.map((user) => (
                <div className="users" key={user.id}>
                    <h2>User name: {user.username}</h2>
                    <p>Date d'inscription: {formatDate(user.created_at)}</p>
                </div>
            ))}
        </div>
    );
};

