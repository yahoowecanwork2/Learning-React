import { useFormStatus } from "react-dom";


function Form() {

    const handleSummit = async () => {
        await new Promise(res => setTimeout(res, 2000));
        console.log(submit);
    };
    function Sumitbutton() {
        const { pending } = useFormStatus();
        console.log(pending);

        return (

            <div>
                <input type="text" placeholder="enter name" />
                <br /> <br />
                <input type="password" placeholder="enter passord" />
                <br /> <br />
                <button disabled={pending}>{pending ? "summiting..." : "submit"}</button>
            </div>

        )
    }


    return (
        <div >
            <h1>useFormstatus hook in React js</h1>
            <form action={handleSummit}>
                {/* <input type="text" placeholder="enter name" />
                <br /> <br />
                <input type="password" placeholder="enter passord" />
                <br /> <br />
                <button>submit</button> */}
                <Sumitbutton />
            </form>


        </div >
    )
}


export default Form;