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
                <a href="#" class="toggle-button">
                    <span class="bar"></span>
                    <span class="bar"></span>
                    <span class="bar"></span>
                </a>
                <div class="navbar-links">
                    <ul>
                        <li>
                            <Link to="/products" class="navbar-li">
                                Products
                            </Link>
                        </li>
                        <li>
                            <Link to="/cart" class="navbar-li">
                                Cart
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" class="navbar-li">
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
