import { useState } from "react";

import Adduser from "./adduser";
import Displayuser from "./displayuser";

function Lift() {
    const [user, setUser] = useState();
    return (
        <div >

            <Adduser setUser={setUser} />
            <Displayuser user={user} />

        </div >
    )
}


export default Lift;