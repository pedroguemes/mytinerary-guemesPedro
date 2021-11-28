import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Home from './pags/Home.js'
import Cities from './pags/Cities.js'
import Error404 from './pags/Error404.js'
import City from './pags/City'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'


function App() {

  return (
    <Router>
        {/* 
          <Route path='/' element={<Home/>}/>
          <Route path='/Cities' element={<Cities/>}/>
          <Route path='*' element={<Error404/>}/>
              {/* <div className="App">
              </div> 
       */}
           <Routes>
                  <Route path="/" element={<Home/>}/>
                 <Route path="/Cities" element={<Cities/>}/> 
                 <Route path="/City" element={<City/>}/> 
                 <Route path="*" element={<Error404/>}/> 
                 {/* ya se. ya se. ya entendi. ya no hago.  */}
          </Routes> 
    </Router>
  );
}

export default App;
