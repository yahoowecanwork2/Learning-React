import { useTransition } from "react";

function Tranistion() {
    const [pending, setTransition] = useTransition();
    const handleChange = () => {
        setTransition(async () => {
            await new Promise(res => setTimeout(res, 2000))
        })
    }
    return (
        <div >
            <h1>useTranistion hook in react</h1>
            <button disabled={pending} onClick={handleChange}>submit</button>


        </div >
    )
}


export default Tranistion;