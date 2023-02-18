import { Outlet, Link } from "react-router-dom"
import { useState } from 'react';
import { FaRegTimesCircle, FaGripLines } from 'react-icons/fa';

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };
    return (
      <>
      <div className="mobile-nav" onClick={toggleNav}>
        {isOpen ? <FaRegTimesCircle /> : <FaGripLines />}
      </div>
      <nav className={`nav ${isOpen ? 'active' : ''}`} onClick={toggleNav}>
        <Link to="/" className="nav-item">HOME</Link>
        <a href="#" className="nav-item">ABOUT</a>
        <a href="#" className="nav-item">MENU</a>
        <Link to="/booking" className="nav-item">RESERVATIONS</Link>
        <a href="#" className="nav-item">ORDER ONLINE</a>
        <a href="#" className="nav-item">LOGIN</a>
      </nav>
      </>
    )
  }
  

  