function Loop() {
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
        <div>
            <h1>loop in jsx with map function</h1>
            <table border={1}>
                <thead>
                    <tr>
                        <td>id</td>
                        <td>name </td>
                        <td>age</td>
                        <td>email</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        userdata.map((user) => (
                            <tr>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.age}</td>
                                <td>{user.email}</td>
                            </tr>
                        ))
                    }

                </tbody>
            </table>


            <h3>damy table</h3>
            <table border={1} >
                <thead>
                    <tr>
                        <td>id</td>
                        <td>name </td>
                        <td>age</td>
                        <td>email</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>neha </td>
                        <td>21</td>
                        <td>neha@gamil</td>
                    </tr>
                    <tr>
                        <td>id</td>
                        <td>name </td>
                        <td>age</td>
                        <td>email</td>
                    </tr>
                    <tr>
                        <td>id</td>
                        <td>name </td>
                        <td>age</td>
                        <td>email</td>
                    </tr>
                    <tr>
                        <td>id</td>
                        <td>name </td>
                        <td>age</td>
                        <td>email</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}


export default Loop;