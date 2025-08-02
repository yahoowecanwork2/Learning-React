import { useParams } from "react-router";
import { useEffect, useState } from "react";

function UserEdit() {
    const { id } = useParams();
    const [Id, setId] = useState('');
    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    useEffect(() => {
        updateUser()
    }, [])
    const updateUser = async () => {
        const url = "http://localhost:5000/users/" + id;
        let response = await fetch(url)
        response = await response.json();
        setId(response.id);
        setName(response.name);
        setAge(response.age);
        console.log(response);
    }
    return (
        // <div className="form-container">
        //     <h1>User Edit Page</h1>
        //     <input type="text" value={id}
        //         placeholder="Enter your id" /><br /><br />
        //     <input type="text" value={name}
        //         placeholder="Enter your name" /><br /><br />
        //     <input type="text" value={age}
        //         placeholder="Enter your age" /><br /><br />
        //     <button>Update User</button>
        // </div>
    )
}
export default UserEdit;