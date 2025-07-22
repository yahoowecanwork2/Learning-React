import { useEffect, useState } from "react";



function Hooks() {
    const [counter, setCounter] = useState(0);
    const [data, setData] = useState(0);

    useEffect(() => {
        // onceCall();
        count();
    }, [counter])

    function onceCall() {
        console.log("function once called");

    }
    function count() {
        console.log("count");

    }
    // counter();
    // onceCall();
    return (
        <div>
            <h1>hook useeffect</h1>
            <button onClick={() => setCounter(counter + 1)}> counter : {counter}</button>
            <button onClick={() => setData(data + 1)}> data : {data}</button>

        </div>
    )
}


export default Hooks;