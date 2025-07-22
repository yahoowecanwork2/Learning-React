import { useEffect } from "react";

function LifeCycle({ counter, data }) {

    useEffect(() => {
        console.log("mount");

    }, [])
    useEffect(() => {
        console.log("update mount");

    }, [data])
    useEffect(() => {
        return () => {
            console.log("unmount ");
        }



    }, [])


    return (
        <div>

            <h3>counter value :{counter}</h3>
            <h3>data  value :{data}</h3>

        </div>
    )
}


export default LifeCycle;