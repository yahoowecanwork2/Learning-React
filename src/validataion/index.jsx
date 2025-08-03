import React, { useState } from 'react';
import '../validataion/validation.css'

function Validation() {
    const [name, setName] = useState('');
    const [nameErr, setNameErr] = useState();
    const [password, setPassword] = useState('');
    const [passErr, setPassErr] = useState();
    const handleName = (event) => {
        console.log(event.target.value);
        if (event.target.value.length > 5) {
            setNameErr('Please enter valid name.only 8 charaters allowed')
        } else {
            setNameErr();
        }
    }

    const handlePassword = (event) => {
        let regex = /^[A-Z0-9]+$/i;
        if (regex.test(event.target.value)) {
            setPassErr();
        } else {
            setPassErr();
            setPassErr('Please enter valid password.only numbers and alphabates  allowed')
        }
    }
    return (
        <div className='validation-container'>
            <h1> simple validation</h1>
            <form>
                <div className='input-group'>
                    <input type="text"
                        className={nameErr ? 'error' : ''}
                        onChange={handleName}
                        placeholder='Enter your name' /> <br />
                    <span className='error-text'>{nameErr && nameErr}</span>
                </div>
                <div className='input-group'>
                    <input type="password"
                        onChange={handlePassword}
                        className={passErr ? 'error' : ''}
                        placeholder='Enter your password' /> <br />
                    <span className='error-text'>{passErr && passErr}</span>
                </div>
                <button type='sumbit' disabled={!!nameErr || passErr}>logging</button>
            </form>
        </div>
    )
}

export default Validation;
