import { useRef } from "react";

function Uncontrolled() {
    const userRef = useRef();
    const passwordRef = useRef();

    const handleform = () => {
        event.preventDefault();
        const user = document.querySelector("#user").value;
        const password = document.querySelector("#password").value;
        console.log(user, password);

    }
    const handleformRef = () => {
        event.preventDefault();
        const user = userRef.current.value;
        const password = passwordRef.current.value;
        console.log(user, password);

    }

    return (
        <div >
            <h1>uncontrolled components</h1>
            <form action="post" onSubmit={handleform} >
                <input type="text" id="user" placeholder="enter your name" />
                <br /> <br />
                <input type="password" id="password" placeholder="enter your password" />
                <br /> <br />
                <button>summit</button>
            </form>
            <hr />
            <h1>uncontrolled components with userRef</h1>
            <form action="post" onSubmit={handleformRef} >
                <input type="text" ref={userRef} placeholder="enter your name" />
                <br /> <br />
                <input type="password" ref={passwordRef} placeholder="enter your password" />
                <br /> <br />
                <button>summit</button>
            </form>


        </div >
    )
}


export default Uncontrolled;