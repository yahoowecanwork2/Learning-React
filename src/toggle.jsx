import { useState } from "react";
import State from "./state";
function Toggle() {

    const [display, setDisplay] = useState(false);

    return (
        <div>
            <h1>toggle </h1>
            <button onClick={() => setDisplay(!display)}>toggle</button>
            {
                // display ? <h1>Neha</h1> : null
                display ? <State /> : null
            }
        </div>
    )


}
export default Toggle;