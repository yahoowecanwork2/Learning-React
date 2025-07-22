function Wraper({ children }) {

    return (
        <div style={{ color: "pink", border: "10px solid black", width: "300px", margin: "10px" }}>
            {children}
        </div>
    )
}


export default Wraper;