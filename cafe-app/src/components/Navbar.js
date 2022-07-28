import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Products from './Products';
import Cart from './Cart';

export default function Navbar() {
  return (
    <div>
        <Router>
            <nav class="navbar">
                <div class="brand-title">
                    <Link to="/home" class="brand-link">
                        Brand Name
                    </Link>
                </div>
                <div class="navbar-links">
                    <ul>
                        <li>
                            <Link to="/products">
                                Products
                            </Link>
                        </li>
                        <li>
                            <Link to="/cart">
                                Cart
                            </Link>
                        </li>
                        <li>
                            <Link to="/about">
                                About
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </Router>
    </div>
  )
}
