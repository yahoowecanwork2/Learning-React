import { useState } from "react";

const useToggle = (defaultval) => {
    const [value, setValue] = useState(defaultval);
    function togglevalue(val) {

        if (typeof val != 'boolean') {
            setValue(!value);
        } else {
            setValue(val);
        }
    }
    return [value, togglevalue];


}


export default useToggle;