import useToggle from "./useToggle";

function Custom() {
    const [value, togglevalue] = useToggle(false);
    const [data, setData] = useToggle(true);

    return (
        <div >
            {/* <Usetoggle /> */}
            <button onClick={togglevalue}>toggle heading</button>
            <button onClick={() => togglevalue(true)}>show heading</button>
            <button onClick={() => togglevalue(false)}>hide heading</button>
            {
                value ? <h1>custom toggle</h1> : null
            }
            <hr />
            <button onClick={setData}>toggle heading</button>
            <button onClick={() => setData(true)}>show heading</button>
            <button onClick={() => setData(false)}>hide heading</button>
            {
                data ? <h1>custom toggle</h1> : null
            }


        </div >
    )
}


export default Custom;