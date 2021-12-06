import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Home from "./pags/Home.js";
import SignIn from "./pags/SignIn";
import SignUp from "./pags/SignUp";
import Cities from "./pags/Cities.js";
import Error404 from "./pags/Error404.js";
import Citysinprops from "./pags/City";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { withRouter } from "./utils/routes/withRouter";

const City = withRouter(Citysinprops);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/cities" element={<Cities />} />
        <Route path="/cities/:id" element={<City />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  );
}

export default App;
