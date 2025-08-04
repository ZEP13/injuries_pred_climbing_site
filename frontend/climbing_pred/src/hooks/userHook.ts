import { useEffect, useState } from "react";
import type { User } from "../types/userType.ts";
import { fetchAllUsers } from "../fetchApi/userApi.ts";

export const useUsers = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetchAllUsers()
            .then(setUsers)
            .catch(err => {
                setError(err.message || "Erreur inconnue");
            })
            .finally(() => setLoading(false));
    }, []);

    return { users, loading, error };
};


// quand on set un hoot, il faut ajoute dans le main.tsx <UserProvider> pour que le hook soit dispo sur tt lapp.import { useUser } from "../context/UserContext";
//import { useUser } from "../context/UserContext";

// const Profile = () => {
//   const { user } = useUser();
//
//   return (
//     <div>
//       <h1>Profil</h1>
//       {user ? <p>Connecté en tant que {user.username}</p> : <p>Pas connecté</p>}
//     </div>
//   );
// };
