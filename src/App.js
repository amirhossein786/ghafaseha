
import Navbar from "./Navbar";
import Main from "./Main";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Privacy from "./Privacy";
import Contact from "./Contact";
import Rules from "./Rules";

function App() {


    return (
        <Router>
            <Navbar />
            <Main />
            
            <Routes>
                        <Route path="/Home " element={<Home />}/>
                        <Route path="/About" element={<About />}/>
                        <Route path="/Privacy" element={<Privacy />}/>
                        <Route path="/Rules" element={<Rules />}/>
                        <Route path="/Contact" element={<Contact />}/>


          </Routes>
        </Router>
    );
};
export default App;
