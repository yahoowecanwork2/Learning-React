
import { Link } from "react-router";
function Users() {
    const userData = [{ id: 1, name: 'sam' },
    { id: 2, name: 'harry' },
    { id: 3, name: 'Ron' },
    { id: 4, name: 'hermaine' },
    ]

    return (
        <div style={{ marginLeft: 10 }}>
            <h2>User list page</h2>
            {
                userData.map((item) => (
                    <div>
                        <h4><Link to={'/users/ ' + item.id}>{item.name}</Link></h4>
                    </div>
                ))
            }
        </div>
    )
}
export default Users;