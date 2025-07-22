
function Adduser({ setUser }) {

    return (
        <div >
            <h1>add user</h1>
            <input type="text" onChange={(event) => setUser(event.target.value)} placeholder="enter user name" />
            {/* <h2>{user}</h2> */}
            <hr />


        </div >
    )
}


export default Adduser;