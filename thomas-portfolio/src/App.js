import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <>
      <Navbar />
      <Route exact path="/" component = {Home} />
        {/* <Route exact path="/portfolio" component = {Portfolio} />
        <Route exact path="/contact" component = {Contact} /> */}
      
      </>
    </Router>
  );
}

export default App;
