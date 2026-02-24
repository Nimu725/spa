import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <div style={{height:"100vh", }}>
        <Header></Header>
        <nav style={{
        display: "flex",
        justifyContent: "flex-end",
        gap: "20px",
        padding: "10px"
      }}>
        <Link to="/">Home</Link> | 
        <Link to="/about">About</Link> |
        <Link to="/contact">Contact</Link>
      </nav>

      <div style={{ flex: 1 }}>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </div>

      <Footer></Footer>

    </div>
  )
}

export default App