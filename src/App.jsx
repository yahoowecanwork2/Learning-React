import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router';
import Navbar from "./navbar";
import Home from './home';
import About from './about';
import Login from './login';
import PageNotFound from './PageNotfound';
import Collage from './Collage';
import { BrowserRouter } from 'react-router';
import Student from './student';
import Departments from './Department';
import Details from './Details';
import Users from './Users';


function App() {


  return (
    <div>

      <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>
          <Route element={<Navbar />} >
            <Route path='/' element={<h1><Home /></h1>} />
            <Route path='/user/Login' element={<h1><Login /></h1>} />
            <Route path='/user/About' element={<h1><About /></h1>} />
            <Route path='/users' element={<h1><Users /></h1>} />
          </Route>



          <Route path='user'>
            <Route path='/user/Login' element={<h1><Login /></h1>} />
            <Route path='/user/About' element={<h1><About /></h1>} />
          </Route>



          <Route path='/Collage' element={<h1><Collage /></h1>} >
            <Route index element={<h2><Student /></h2>} />
            <Route path='Departments' element={<h2><Departments /></h2>} />
            <Route path='Details' element={<h2><Details /></h2>} />
          </Route>
          <Route path='/*' element={<h1><PageNotFound /></h1>} />
          {/* <Route path='/*' element={<Navigate to="/Login" />} /> */}
        </Routes>
      </BrowserRouter>

    </div>
  )
}


export default App;









