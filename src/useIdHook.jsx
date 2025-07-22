import { useId } from "react";

function Userid() {
    // const name = useId();
    // const password = useId();
    // const city = useId();
    return (
        <div >
            {/* <form action="">
                <label htmlFor="name">enter user name:</label>
                <input type="text" id="name" placeholder="enter your nme" />
                <br /> <br />
            </form> */}
            <UserForm />
            <hr></hr>
            <UserForm />


        </div >
    )
}
function UserForm() {
    const user = useId();

    return (
        <div >
            <form action="">
                <label htmlFor={user + "name"}>enter user name:</label>
                <input type="text" id={user + "name"} placeholder="enter your name" />
                <br /> <br />
                <label htmlFor={user + "password"}>enter user password:</label>
                <input type="text" id={user + "password"} placeholder="enter your password" />
                <br /> <br />
                <label htmlFor={user + "terms"}>enter your terms and condition:</label>
                <input type="checkbox" id={user + "terms"} placeholder="terms and condition" />
                <br /> <br />
            </form>


        </div >
    )
}


export default Userid;