 // src/App.js
 import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
// import Dashboard from "./pages/Dashboard";  
import ExchangeBook from "./pages/ExchangeBook";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Dashboard from "./pages/Dashboard";


function App() {
  return (
    <Router>
      <Header />                {/* rendered once for every page */}
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dash" element={<Dashboard />} />    
         <Route path="/bookexchange" element={<ExchangeBook />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />

        </Routes>
      </div>
      <Footer />                
    </Router>
  );
}

export default App;







 

