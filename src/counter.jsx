import { useState } from "react";
import State from "./state";
function Counter() {
    let [counter, setCounter] = useState(1);
    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={() => setCounter(counter + 1)}>conditions</button>
            {
                counter == 0 ? <h1>counter0</h1> :
                    counter == 1 ? <h1>counter1</h1> :
                        counter == 2 ? <h1>counter2</h1> :
                            counter == 3 ? <h1>counter3</h1> :
                                counter == 4 ? <h1>counter4</h1> :
                                    null
            }
        </div>
    )
}
export default Counter;