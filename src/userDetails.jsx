
import { Link } from "react-router";
import { useParams } from "react-router";
function UsersDetails() {
    const paramData = useParams();

    return (
        <div style={{ marginLeft: 10 }}>
            <h2>UserDetails list page</h2>
            <h3>user id is:{paramData.id}</h3>
            <h3><Link to='/users'>back</Link></h3>

        </div>
    )
}
export default UsersDetails;