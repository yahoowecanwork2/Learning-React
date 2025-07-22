import { useRef } from "react";


function Referance() {
    const inputRef = useRef(null);
    const inputHandler = () => {
        console.log(inputRef);
        inputRef.current.focus();
        inputRef.current.style.color = "red";
        inputRef.current.placeholder = "enter password";

    }
    const toggleHandler = () => {
        if (inputRef.current.style.display != "none") {
            inputRef.current.style.display = "none";
        } else {
            inputRef.current.style.display = "inline";
        }
    }

    return (
        <div >
            <h1>useRef hook in react </h1>
            <button onClick={toggleHandler}>toggle</button>
            <input ref={inputRef} type="text" placeholder="input useRef" />
            <button onClick={inputHandler}>focous on input</button>


        </div >
    )
}


export default Referance;