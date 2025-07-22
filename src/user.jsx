function User({ state }) {

    return (
        <div style={{
            border: "10px solid black",
            padding: "10px",
            margin: "10px",
            width: "500px",
            borderRadius: "10px"

        }}>
            <h1>name:{state.name}</h1>
            <h1>id:{state.id}</h1>
            <h1>age:{state.age}</h1>
            <h1>email:{state.email}</h1>

        </div>
    )
}


export default User;