import { useState } from "react";

function Check() {
    const [isCheck, setCheck] = useState([]);
    const checkHandle = (event) => {

        console.log(event.target.value, event.target.checked);
        if (event.target.checked) {
            setCheck([...isCheck, event.target.value])
        } else {
            setCheck([...isCheck.filter((item) => item != event.target.value)])
        }

    };
    return (
        <div>
            <h1>checkbox</h1>
            <input type="checkbox" onChange={checkHandle} id="html" value="html" />
            <label htmlFor="html">html</label>
            <br />
            <input type="checkbox" onChange={checkHandle} id="css" value="css" />
            <label htmlFor="css">css</label>
            <br />
            <input type="checkbox" onChange={checkHandle} id="js" value="js" />
            <label htmlFor="js">js</label>
            <br />
            <input type="checkbox" onChange={checkHandle} id="react" value="react" />
            <label htmlFor="react">react</label>
            <br />
            <h1>{isCheck.toString()}</h1>
        </div>
    )
}


export default Check;