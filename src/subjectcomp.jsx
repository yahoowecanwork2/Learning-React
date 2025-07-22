import { useContext } from "react";
import { contextData } from "./contextapi";

function SubjectComp() {
    const subject = useContext(contextData);
    return (
        <div style={{ backgroundColor: "green", padding: 10 }} >
            <h1>subject is :{subject}</h1>



        </div >
    )
}


export default SubjectComp;