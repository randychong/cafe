import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Cart from './Cart';

export default function Navbar() {
  return (
    <div>
        <Router>
            <Link to="/home">
                <p>Link to home</p>
            </Link>
            <Link to="/cart">
                <p>Link to cart</p>
            </Link>
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
        </Router>
    </div>
  )
}
