
import { useEffect, useState } from "react";
function ApiIndex() {
    const [userData, setUserData] = useState([]);
    useEffect(() => {
        getUserData()
    }, [])

    async function getUserData() {
        const url = "https://jsonplaceholder.typicode.com/users";
        let response = await fetch(url);
        response = await response.json();

        setUserData([response[0], response[1], response[2]]);
    }
    console.log(userData);

    return (
        <div>
            <h1>API index</h1>
            {
                (
                    <ul>
                        <ul>
                            {userData.map((user) => (
                                <li key={user.id}>
                                    <h2>id: {user.id}</h2>
                                    <h2>name: {user.name}</h2>
                                </li>
                            ))}
                        </ul>
                    </ul>
                )
            }
        </div>
    );

}

export default ApiIndex;
