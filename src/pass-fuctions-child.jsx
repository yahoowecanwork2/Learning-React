function Child({ displayName, name }) {
    // const name = "neha yadav";

    return (
        <div >
            <h1>pass fuction </h1>
            <button onClick={() => displayName(name)}>display the function</button>




        </div >
    )
}


export default Child;