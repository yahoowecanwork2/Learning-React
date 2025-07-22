import { useRef } from "react";
import Userinput from "./forwardRef-2";

function Forward() {

    const inputRef = useRef(null);
    const updateInput = () => {
        inputRef.current.value = 1000;
        inputRef.current.focus();
    }


    return (
        <div >
            <h1>forwardRef in react </h1>
            <Userinput ref={inputRef} />
            <button onClick={updateInput}>update input</button>


        </div >
    )
}


export default Forward;