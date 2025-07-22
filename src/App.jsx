import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router';
import Navbar from "./navbar";
import Home from './home';
import About from './about';
import Login from './login';
import PageNotFound from './PageNotfound';
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
          {/* <Route path='/*' element={<h1><PageNotFound /></h1>} /> */}
          <Route path='/*' element={<Navigate to="/Login" />} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}


export default App;









