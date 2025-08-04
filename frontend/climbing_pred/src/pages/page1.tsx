import { useEffect, useState } from "react";
import axios from "axios";

type User = {
    id: number;
    username: string;
};

const Page1 = () => {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        const fetchAllUsers = async () => {
            try {
                const res = await axios.get<User[]>("http://localhost:8800/users");
                setUsers(res.data);
                console.log(res);
            } catch (err) {
                console.log("erreur lors de la recuperation des donnees", err);
            }
        };
        fetchAllUsers();
    }, []);

    return (
        <div>
            <h1>My users</h1>
            {users.map((user) => (
                <div className="users" key={user.id}>
                    <h2>User name: {user.username}</h2>
                </div>
            ))}
        </div>
    );
};

export default Page1;

