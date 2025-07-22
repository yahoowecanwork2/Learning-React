import { useState } from "react";
import { Placeholder } from "react-bootstrap";

function UpdateArray() {
    const [data, setData] = useState([

        'neha', 'shalu', 'monty'
    ])
    const [dataDetails, setDataDetailes] = useState([
        { name: 'neha', age: 21, city: 'gurgaon' },
        { name: 'shalu', age: 21, city: 'gurgaon' },
        { name: 'srasti', age: 23, city: 'gurgaon' },
    ])

    const handleUser = (name) => {
        data[data.length - 1] = name;
        setData([...data]);

    }
    const handleAge = (age) => {
        dataDetails[dataDetails.length - 1].age = age;
        setDataDetailes([...dataDetails]);

    }
    return (
        <div >
            <h2>update arry in states</h2>
            <br />
            <br />
            <input type="text" onChange={(event) => handleUser(event.target.value)}
                placeholder="enter user name"
            />
            <br />
            <br />            {
                data.map((item, index) => (
                    <h1 key={index}>{item}</h1>
                ))
            }
            <hr />
            <input type="text" onChange={(event) => handleAge(event.target.value)}
                placeholder="enter  last user age"
            />
            {
                dataDetails.map((item, index) => (
                    <h4 key={index}>{item.name},{item.age}</h4>
                ))
            }


        </div >
    )
}


export default UpdateArray;