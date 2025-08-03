import React from 'react'
import { useActionState } from 'react';

function UseActionstate() {
    const handleLogging = (preData, formData) => {
        let name = formData.get('name');
        let password = formData.get('password');
        let regex = /^[A-Z1-9]+$/i;
        if (!name || name.length > 5) {
            return { error: 'only 5 charater allowed', name, password }
        } else if (!regex.test(password)) {
            return { error: "only number and charaters allowed", name, password }
        } else {
            return { massage: ' loggin done', name, password }
        }

        // console.log(name, password);

    }

    const [data, action, pendingg] = useActionState(handleLogging);

    // console.log(data);

    return (
        <div>
            <h1>validation by using useActionstate hook</h1>
            {
                !data?.massage && < span style={{ color: 'green' }}> {data?.massage}</span>
            }
            {
                !data?.error && < span style={{ color: 'red' }}> {data?.error}</span>
            }
            <form action={action}>
                <input type="text" name="name" defaultValue={data?.name} placeholder='enter your name' /><br /><br />
                <input type="password" defaultValue={data?.password} name="password" placeholder='enter your password' /><br /><br />
                <button disabled={data?.error} onClick={handleLogging}>loging</button>
            </form>
        </div >
    )
}

export default UseActionstate;