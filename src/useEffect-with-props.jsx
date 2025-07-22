import { useEffect } from "react";

function Props({ counter, data }) {
    function handleCounter() {
        console.log("counter");

    }
    function handleData() {
        console.log("data");

    }
    useEffect(() => {
        handleCounter();
    }, [])
    useEffect(() => {
        handleData();
    }, [data])

    // handleData();
    // handleCounter();
    return (
        <div>

            <h3>counter value :{counter}</h3>
            <h3>data  value :{data}</h3>

        </div>
    )
}


export default Props;