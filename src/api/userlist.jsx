import { useEffect, useState } from "react";
import './list.css'

function Userlist() {
    const [userData, setUserData] = useState([]);
    const [loading, setloading] = useState(false);
    useEffect(() => {
        setloading(true);
        getUserData();
    }, []

    );

    const getUserData = async () => {
        const url = ("http://localhost:5000/users")
        let response = await fetch(url);
        response = await response.json();
        setUserData(response);
        setloading(false);

    }
    // console.log(response);


    return (

        <div>

            <ul className="user-list user-list-head ">
                <li>Id</li>
                <li>Name</li>
                <li>age</li>
            </ul>

            {
                !loading ? userData.map((user, index) => (
                    <ul key={index} className="user-list ">
                        <li> {user.id}</li>
                        <li> {user.name}</li>
                        <li> {user.age}</li>
                    </ul>
                )) : <h1>data loading ...</h1>
            }
        </div >
    )
}
export default Userlist;