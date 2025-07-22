import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Navbar from "./navbar";
import Home from './home';
import About from './about';
import Login from './login';
import { BrowserRouter } from 'react-router';


function App() {


  return (
    <div>

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<h1>Home</h1>} />
          <Route path='/Login' element={<h1>Login</h1>} />
          <Route path='/About' element={<h1>About</h1>} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}


export default App;









