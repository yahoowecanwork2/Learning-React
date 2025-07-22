import Student from "./student";
import Departments from "./Department";
import Details from "./Details";

import { NavLink, Outlet } from "react-router";
import './css/header.css';
function Collage() {
    return (
        <div className="collage" style={{ textAlign: "center", }}>
            <h2>Collage Page</h2>
            <NavLink className="link" to="Student">Student </NavLink>
            <NavLink className="link" to="Departments">Departments </NavLink>
            <NavLink className="link" to="Details"> Details </NavLink>
            <Outlet />
        </div>
    )
}
export default Collage;