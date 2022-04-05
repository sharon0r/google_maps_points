

import React from "react";
import './App.css';
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages';
 import About from './pages/About';
import Contact from './pages/Contact';
import SignUp from './pages/Signup';
import SignIn from './pages/Signin';

function App() {
  return (
    <div className="App">
    <Router>
      <Navbar />
      
      <Routes>
        <Route exact path="/"  component={Home} />
        <Route  path="/About" component={About} />
        <Route  path="/Contact" component={Contact} />
        <Route  path="/Signin" component={SignIn} />
        <Route path="/Sign-up" component={SignUp} />
      </Routes>
    </Router>
    <About/>
    </div>
  );
}

export default App;
