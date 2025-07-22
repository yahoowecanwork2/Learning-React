import { Alert } from "bootstrap";
import Child from "./pass-fuctions-child";

function Parent() {

    const displayName = (name) => {
        alert(name)
    }


    return (
        <div >
            <h1>pass fuction in compoent as props</h1>

            <Child displayName={displayName} name="neha yadav" />
            <Child displayName={displayName} name="shalu" />
            <Child displayName={displayName} name="vasu" />
            <Child displayName={displayName} name="srasti" />
            <Child displayName={displayName} name="momo" />
        </div >
    )
}


export default Parent;