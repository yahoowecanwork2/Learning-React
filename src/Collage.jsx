import Student from "./student";
import Departments from "./Department";
import Details from "./Details";

import { Link, NavLink, Outlet } from "react-router";
import './css/header.css';
function Collage() {
    return (
        <div className="collage" style={{ textAlign: "center", }}>
            <h2>Collage Page</h2>
            <h3> <Link to={'/'}><h2>Go back to Home</h2></Link> </h3>
            <NavLink className="link" to="">Student </NavLink>
            <NavLink className="link" to="Departments">Departments </NavLink>
            <NavLink className="link" to="Details"> Details </NavLink>
            <Outlet />
        </div>
    )
}
export default Collage;