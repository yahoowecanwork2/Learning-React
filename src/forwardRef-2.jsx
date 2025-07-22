// import { forwardRef } from "react";


// <h1>forwardRef in react version befor 19</h1>
// function Userinput(props, ref) {

//     return (
//         <div >

//             <input type="text" ref={ref} />

//         </div >
//     )
// }


// export default forwardRef(Userinput);
const Userinput = (props) => {

    return (
        <div >

            <input type="text" ref={props.ref} />

        </div >
    )
}


export default Userinput;