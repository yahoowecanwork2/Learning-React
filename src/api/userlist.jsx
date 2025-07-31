import { useEffect, useState } from "react";
import './list.css'
import { use } from "react";

function Userlist() {
    const [userData, setUserData] = useState([]);
    const [loading, setloading] = useState(false);
    const url = ("http://localhost:5000/users")
    useEffect(() => {
        setloading(true);
        getUserData();
    }, []

    );

    const getUserData = async () => {

        let response = await fetch(url);
        response = await response.json();
        setUserData(response);
        setloading(false);

    }
    const userIdDelete = async (id) => {
        let response = await fetch(url + "/" + id, {
            method: 'DELETE'
        });
        response = await response.json();
        if (response) {
            alert("data deleted");
            getUserData();
        }

    }



    // console.log(response);


    return (

        <div>

            <ul className="user-list user-list-head ">
                <li>Id</li>
                <li>Name</li>
                <li>age</li>
                <li>action</li>
            </ul>

            {
                !loading ? userData.map((user, index) => (
                    <ul key={index} className="user-list ">
                        <li> {user.id}</li>
                        <li> {user.name}</li>
                        <li> {user.age}</li>
                        <li><button onClick={() => userIdDelete(user.id)} >Delete</button></li>
                    </ul>
                )) : <h1>data loading ...</h1>
            }
        </div >
    )
}
export default Userlist;