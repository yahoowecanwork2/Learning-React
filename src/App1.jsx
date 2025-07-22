import Todo from "./assets/todo";
function App1() {
    const name = "neha";
    function fruit() {
        return "apple";
    }
    function sum(a, b) {
        return a + b;
    }
    function operation(a, b, op) {
        let result = 0;
        if (op == "+") {
            return a + b;
        } else if (op == "-") {
            return a - b;
        } else {
            return a * b;
        }
    }
    const userobj = {
        name: "neha",
        email: "neha1234@gmail.com",
        age: 21
    }
    const userArray = ["apple", "mango", "banana"];

    return (
        <div>
            <h1>jsx exercise</h1>
            <h2>{name}</h2>
            <h2>{fruit()}</h2>
            <h2>{sum(12, 8)}</h2>
            <h2>{operation(30, 50, "-")}</h2>
            <h2>{userobj.email}</h2>
            <h2>{userArray[1]}</h2>
            <Todo />
        </div>
    )
}




export default App1;