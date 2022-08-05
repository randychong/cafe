import React, { useState} from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Orders from './Orders';
import Menu from './Menu';
import Cart from './Cart';

export default function Navbar() {
    const [isActive, setActive] = useState(false)
    return (
    <div>
        <Router>
            <nav className="navbar">
                <div className="brand-title">
                    <Link to="/" className="brand-link">
                        The Bobarista
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
                            <Link to="/menu" className="navbar-li">
                                Menu
                            </Link>
                        </li>
                        <li>
                            <Link to="/cart" className="navbar-li">
                                Cart
                            </Link>
                        </li>
                        <li>
                            <Link to="/orders" className="navbar-li">
                                Orders
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/menu" element={<Menu />} />
                <Route exact path="/cart" element={<Cart />} />
                <Route exact path="/orders" element={<Orders />} />
            </Routes>
        </Router>
    </div>
  )
}
