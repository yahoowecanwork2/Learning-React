import { BrowserRouter, Routes, Route, Link } from "react-router";
function Router() {


    return (
        <div>
            <h1>Router in react </h1>
            <BrowserRouter>
                <Link to="/"> Home</Link >
                <Link to="/about"> about</Link >
                <Link to="/contact"> contact</Link >
                <Link to="/blog"> blog</Link >
                <Routes>
                    <Route path="/" element={<h1>Home</h1>} />
                    <Route path="/about" element={<h1>about</h1>} />
                    <Route path="/contact" element={<h1>contact</h1>} />
                    <Route path="/blog" element={<h1>blog</h1>} />

                </Routes>
            </BrowserRouter>
        </div>
    )
}


export default Router;