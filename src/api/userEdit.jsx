import { useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";

function UserEdit() {
    const { id } = useParams();
    const [Id, setId] = useState('');
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const url = "http://localhost:5000/users/" + id;
    const navigate = useNavigate();

    useEffect(() => {
        updateUser()
    }, [])
    const updateUser = async () => {

        let response = await fetch(url)
        response = await response.json();
        setId(response.id);
        setName(response.name);
        setAge(response.age);
        console.log(response);
    }

    const updateData = async () => {
        console.log(id, name, age);
        let response = await fetch(url, {
            method: 'PUT',
            body: JSON.stringify({ id: Id, name, age })
        })
        response = await response.json();
        console.log(response);
        if (response) {
            alert("data updated succesful")
            navigate("/")
        }

    }

    return (
        <div className="form-container">
            <h1>User Edit Page</h1>
            <input type="text" value={Id} onChange={(event) => setId(event.target.value)}
                placeholder="Enter your id" /><br /><br />
            <input type="text" value={name} onChange={(event) => setName(event.target.value)}
                placeholder="Enter your name" /><br /><br />
            <input type="text" value={age} onChange={(event) => setAge(event.target.value)}
                placeholder="Enter your age" /><br /><br />
            <button onClick={updateData}>Update User</button>
        </div>
    )
}
export default UserEdit;