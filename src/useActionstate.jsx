import { useActionState } from "react";

const handleSumbit = async (previousData, formData) => {
    let name = formData.get('name');
    let password = formData.get('password');
    await new Promise(res => setTimeout(res, 2000))
    // console.log("handleSumbit called ", name, password);
    if (name && password) {
        return { message: "data sumbited", name, password };

    } else {
        return { error: "data  not sumbited", name, password }
    }

}

function Action() {
    const [data, action, pending] = useActionState(handleSumbit, undefined)
    console.log(data);

    return (
        <div >
            <h1>useActionState hook</h1>
            <form action={action}>
                <input type="text" defaultValue={data?.name} name="name" placeholder="enetr your name" />
                <br /> <br />
                <input type="password" defaultValue={data?.password} name="password" placeholder="enetr your password" />
                <br /> <br />
                <button disabled={pending}>submit</button>
                <br /> <br />
                {
                    data?.error && <span style={{ color: 'red' }}>{data?.error}</span>
                }
                {
                    data?.massage && <span style={{ color: 'green' }}>{data?.massage}</span>
                }


            </form>
            <h3> name:{data?.name}</h3>
            <h3> password:{data?.password}</h3>

        </div >
    )
}


export default Action;