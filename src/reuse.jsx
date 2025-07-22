import User from "./user";


function Reuse() {
    const userdata = [
        {
            id: 1,
            name: "neha",
            age: 21,
            email: "neha@12345",
        },
        {
            id: 2,
            name: "shalu",
            age: 21,
            email: "shalu@12345",
        },
        {
            id: 3,
            name: "vasu",
            age: 18,
            email: "vasu@12345",
        },
        {
            id: 4,
            name: "srasthi",
            age: 21,
            email: "srashti@12345",
        },
    ]
    return (
        <div key={name.id}>
            <h1> Reuse compont in loop</h1>
            {
                userdata.map((user) => (
                    <div>
                        <User state={user} />
                    </div>
                ))
            }
        </div>
    )
}


export default Reuse;