import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router';
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


function App() {


  return (
    <div>

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<h1><Home /></h1>} />
          <Route path='/Login' element={<h1><Login /></h1>} />
          <Route path='/About' element={<h1><About /></h1>} />
          <Route path='/Collage' element={<h1><Collage /></h1>} >
            <Route path='Student' element={<h2><Student /></h2>} />
            <Route path='Departments' element={<h2><Departments /></h2>} />
            <Route path='Details' element={<h2><Details /></h2>} />
          </Route>
          {/* <Route path='/*' element={<h1><PageNotFound /></h1>} /> */}
          <Route path='/*' element={<Navigate to="/Login" />} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}


export default App;









