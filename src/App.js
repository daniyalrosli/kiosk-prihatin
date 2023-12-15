import React from "react";
import Index from "./pages";
import Login from "./layout/login";
import Signup from "./layout/signup";
import Volunteer from "./pages/volunteer";
import Donate from "./pages/donate";
import About from "./pages/about";
import Events from "./pages/events";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Contact from "./pages/contact";
import Elements from "./pages/elements";
import Pay from "./pages/paygateway";
import Stocks from "./pages/stocks";

function App() {
  return (
    <div className="App">
      <Router>
        
        <Routes>

          <Route path='/' element={<Index></Index>} ></Route>
          <Route path='/about' element={<About></About>} ></Route>
          <Route path='/contact' element={<Contact></Contact>} ></Route>
          <Route path='/login' element={<Login></Login>} ></Route>
          <Route path='/signup' element={<Signup></Signup>} ></Route>
          <Route path='/donate' element={<Donate></Donate>} ></Route>
          <Route path='/volunteer' element={<Volunteer></Volunteer>} ></Route>
          <Route path='/elements' element={<Elements></Elements>} ></Route>
          <Route path='/events' element={<Events></Events>} ></Route>
          <Route path='/pay' element={<Pay></Pay>} ></Route>
          <Route path='/stocks' element={<Stocks></Stocks>} ></Route>

          
          

        </Routes>

        

   </Router>
     
      
    </div>
  );
}

export default App;
