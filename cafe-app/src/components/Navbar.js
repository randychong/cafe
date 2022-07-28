import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Products from './Products';
import Cart from './Cart';

export default function Navbar() {
  return (
    <div>
        <Router>
            <nav class="navbar">
                <div class="brand-title">Brand Name</div>
                <div class="navbar-links">
                    <ul>
                        <li>
                            <Link to="/home">
                                <p>Link to home</p>
                            </Link>
                        </li>
                        <li>
                            <Link to="/products">
                                <p>Link to products</p>
                            </Link></li>
                        <li>
                            <Link to="/cart">
                                <p>Link to cart</p>
                            </Link></li>
                    </ul>
                </div>
            </nav>
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
        </Router>
    </div>
  )
}
