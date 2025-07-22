import styled from "styled-components";

const Heading = styled.h1`
color:red;
border:1px solid black;
margin:10px;
padding:10px;
border-radius:5px;
`
const Stylebtn = styled.button({
    color: "red",
    border: "1px solid black",
    margin: "10px",
    padding: "10px",
    bordeRadius: "5px",

})



function Component() {






    return (
        <div >

            <h1>styled compontents</h1>
            <Heading>helllo heading</Heading>

            <Stylebtn>login in</Stylebtn>

        </div>
    )
}
export default Component;

