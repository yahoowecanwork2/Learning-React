import { NavLink, Route, Routes } from "react-router";
import Userlist from "./userlist";
import UserAdd from "./useradd";

function ItegateAPI() {
    return (

        <div>
            <ul className="navlist">
                <li>
                    <NavLink to="/">listS</NavLink>

                </li>
                <li>   <NavLink to="/add">addUser</NavLink></li>
            </ul>
            {/* <h1>make route and pages to add user and user ux</h1> */}
            {/* <Userlist /> */}
            <Routes>
                <Route path="/" element={<Userlist />} />
                <Route path="/add" element={<UserAdd />} />
            </Routes>


        </div >
    )
}
export default ItegateAPI;