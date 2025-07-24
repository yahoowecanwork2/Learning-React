import { Link, Outlet } from "react-router";
import './css/header.css';
function Navbar() {
    return (
        <div>
            <div className="header">
                <div>
                    <Link className="link"><h2>Logo</h2></Link>
                </div>
                <div>
                    <ul className="list">
                        <li>
                            <Link className="link" to="/">Home</Link>
                        </li>
                        <li>
                            <Link className="link" to="/user/Login">Login</Link>
                        </li>
                        <li>
                            <Link className="link" to="/user/about">about</Link>
                        </li>
                        <li>
                            <Link className="link" to="/Collage">Collage</Link>
                        </li>

                    </ul>
                </div>
            </div>
            <Outlet />
        </div>

    )
}
export default Navbar;
