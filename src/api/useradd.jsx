import { useState } from 'react';
import './list.css'
function UserAdd() {
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const creatUser = async () => {
        console.log(id, name, age);
        const url = "http://localhost:5000/users";
        let response = await fetch(url, {
            method: 'post',
            // headers: {
            //     'Content-Type': 'application/json'
            // },
            body: JSON.stringify({ id, name, age })
        })
        response = await response.JSON();
        if (response) {
            alert(response);
        }

    }
    return (
        <div className="form-container">
            <h1>add new  users</h1>
            <input type="text"
                onChange={(event) => setId(event.target.value)}
                placeholder="enter your id" /><br /><br />
            <input type="text"
                onChange={(event) => setName(event.target.value)}
                placeholder="enter your name" /><br /><br />
            <input type="text"
                onChange={(event) => setAge(event.target.value)}
                placeholder="enter your age" /><br /><br />
            <button onClick={creatUser}>add users</button>
        </div>
    )
}
export default UserAdd;