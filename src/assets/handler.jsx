import { useState } from "react";

function Radio() {
    const [isGender, setGender] = useState("female");
    const [city, setCity] = useState("delhi");
    return (
        <div>
            <h1> select gender </h1>
            <input type="radio" onChange={(event) => setGender(event.target.value)} value={"male"} checked={isGender == "male"} name="gender" id="male" />
            <label htmlFor="male">male</label>
            <input type="radio" onChange={(event) => setGender(event.target.value)} checked={isGender == "female"} value={" female"} name="gender" id="female" />
            <label htmlFor="frmale">female</label>
            <h1>selected:{isGender}</h1>
            <br /> <br />
            <h1>select city</h1>
            <select onChange={(event) => setCity(event.target.value)} defaultValue={"delhi"}>
                <option value="noida">noida</option>
                <option value="gurgaon">gurgaon</option>
                <option value="delhi">delhi</option>
            </select>
            <h1>city:{city}</h1>
        </div>
    )
}


export default Radio;