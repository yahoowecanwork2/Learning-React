import { useState } from "react";
import women3 from "./assets/images/women-3.jpg";


function Dynamic() {
    const [cardStyle, setCardStyle] = useState({
        width: "200px",
        border: "1px solid #ccc",
        boxShadow: "1px 1px 1px 1px #ccc",
        margin: "10px"
    })
    const [textcolor, setTextColor] = useState("black");
    const updateTheme = (bgColor, textColor) => {
        setCardStyle({ ...cardStyle, backgroundColor: bgColor })
        setTextColor(textColor)

    }
    const [grid, setGrid] = useState(true);

    return (
        <div>
            <h1 style={{ color: " Pink" }}> inline style in react</h1>
            <button onClick={() => updateTheme("gray", "red")}>gray theme</button>
            <button onClick={() => updateTheme("white", "black")}>default theme</button>
            <button onClick={() => setGrid(!grid)}>toggle Grid</button>
            <div style={{ display: grid ? "flex" : "block", flexWrap: "wrap", }}>
                <div style={cardStyle}>
                    <img style={{ width: "200px", }} src={women3} alt="women" />

                    <div style={{ padding: "5px", color: textcolor, }}>
                        <h3>Neha yadav</h3>
                        <p>front end developer</p>
                    </div>
                </div>
                <div style={cardStyle}>
                    <img style={{ width: "200px", }} src={women3} alt="women" />

                    <div style={{ padding: "5px", color: textcolor, }}>
                        <h3>Neha yadav</h3>
                        <p>front end developer</p>
                    </div>
                </div>
                <div style={cardStyle}>
                    <img style={{ width: "200px", }} src={women3} alt="women" />

                    <div style={{ padding: "5px", color: textcolor, }}>
                        <h3>Neha yadav</h3>
                        <p>front end developer</p>
                    </div>
                </div>
                <div style={cardStyle}>
                    <img style={{ width: "200px", }} src={women3} alt="women" />

                    <div style={{ padding: "5px", color: textcolor, }}>
                        <h3>Neha yadav</h3>
                        <p>front end developer</p>
                    </div>
                </div>
                <div style={cardStyle}>
                    <img style={{ width: "200px", }} src={women3} alt="women" />

                    <div style={{ padding: "5px", color: textcolor, }}>
                        <h3>Neha yadav</h3>
                        <p>front end developer</p>
                    </div>
                </div>
                <div style={cardStyle}>
                    <img style={{ width: "200px", }} src={women3} alt="women" />

                    <div style={{ padding: "5px", color: textcolor, }}>
                        <h3>Neha yadav</h3>
                        <p>front end developer</p>
                    </div>
                </div>
                <div style={cardStyle}>
                    <img style={{ width: "200px", }} src={women3} alt="women" />

                    <div style={{ padding: "5px", color: textcolor, }}>
                        <h3>Neha yadav</h3>
                        <p>front end developer</p>
                    </div>
                </div>
                <div style={cardStyle}>
                    <img style={{ width: "200px", }} src={women3} alt="women" />

                    <div style={{ padding: "5px", color: textcolor, }}>
                        <h3>Neha yadav</h3>
                        <p>front end developer</p>
                    </div>
                </div>
                <div style={cardStyle}>
                    <img style={{ width: "200px", }} src={women3} alt="women" />

                    <div style={{ padding: "5px", color: textcolor, }}>
                        <h3>Neha yadav</h3>
                        <p>front end developer</p>
                    </div>
                </div>
                <div style={cardStyle}>
                    <img style={{ width: "200px", }} src={women3} alt="women" />

                    <div style={{ padding: "5px", color: textcolor, }}>
                        <h3>Neha yadav</h3>
                        <p>front end developer</p>
                    </div>
                </div>
                <div style={cardStyle}>
                    <img style={{ width: "200px", }} src={women3} alt="women" />

                    <div style={{ padding: "5px", color: textcolor, }}>
                        <h3>Neha yadav</h3>
                        <p>front end developer</p>
                    </div>
                </div>
                <div style={cardStyle}>
                    <img style={{ width: "200px", }} src={women3} alt="women" />

                    <div style={{ padding: "5px", color: textcolor, }}>
                        <h3>Neha yadav</h3>
                        <p>front end developer</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Dynamic;