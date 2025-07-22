import { useState } from "react";

function Derived() {

    const [users, setUsers] = useState([]);
    const [user, setUser] = useState('');
    const handleAddUser = () => {
        setUsers([...users, user]);
    }
    const total = users.length;
    const last = users[users.length - 1];
    const unique = [...new Set(users)].length;

    return (
        <div >
            <h2>total user:{total}</h2>
            <h2>last user:{last}</h2>

            <h2>Unique Total user:{unique}</h2>

            <input type="text" onChange={(event) => setUser(event.target.value)} placeholder="enter user name" />
            <button onClick={handleAddUser}>submit</button>
            {

                users.map((item, index) => (

                    <h3 key={index}>{item}</h3>
                ))
            }

        </div >
    )
}


export default Derived;