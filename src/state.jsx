import { useState } from "react";

function State() {
    const [fruit, setFruit] = useState("apple");
    // let fruit = "apple";
    let fruitHandler = () => {
        setFruit("banana");
        console.log(fruit);
    }


    return (
        <div>
            <h1>state in react</h1>
            <h1>{fruit}</h1>
            <button onClick={fruitHandler}>change the fruit</button>
        </div>
    )
}


export default State;