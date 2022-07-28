import React, { useState} from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Products from './Products';
import Cart from './Cart';

export default function Navbar() {
    const [isActive, setActive] = useState(false)
    return (
    <div>
        <Router>
            <nav className="navbar">
                <div className="brand-title">
                    <Link to="/home" className="brand-link">
                        Brand Name
                    </Link>
                </div>
                <div className="toggle-button" onClick={()=> setActive(v => !v)}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
                <div className={isActive ? "active-links": "navbar-links"}>
                    <ul>
                        <li>
                            <Link to="/products" className="navbar-li">
                                Products
                            </Link>
                        </li>
                        <li>
                            <Link to="/cart" className="navbar-li">
                                Cart
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" className="navbar-li">
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
