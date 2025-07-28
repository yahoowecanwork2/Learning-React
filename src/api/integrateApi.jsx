import { useEffect, useState } from "react";

function ItegateAPI() {
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
            <h1>integrate json server and Api</h1>

            {
                !loading ? userData.map((user, index) => (
                    <h1 key={index}>{user.name}</h1>
                )) : <h1>data loading ...</h1>
            }
        </div>
    )
}
export default ItegateAPI;