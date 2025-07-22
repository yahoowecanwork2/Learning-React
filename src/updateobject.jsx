import { useState } from "react";

function Upobj() {
    const [data, setData] = useState({
        name: "neha",
        address: {
            city: "gurgaon",
            state: "haryana",
        }
    })
    const handleName = (val) => {
        data.name = val;
        setData({ ...data });
    }
    const handleCity = (city) => {
        data.address.city = city;
        setData({ ...data, address: { ...data.address, city } });
    }
    return (
        <div >
            <h1>update object in state</h1>
            <input type="text" onChange={(event) => handleName(event.target.value)}
                placeholder="enter your name" />
            <br /> <br />
            <input type="text" onChange={(event) => handleCity(event.target.value)}
                placeholder="enter city" />
            <br /> <br />
            <h2>name: {data.name}</h2>
            <h2>city: {data.address.city}</h2>
            <h2>state: {data.address.state}</h2>


        </div >
    )
}


export default Upobj;