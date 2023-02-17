import { Outlet, Link } from "react-router-dom"

export default function Nav() {

    return (
      <nav>
     
        <Link to="/" className="nav-item">HOME</Link>
        <a href="#" className="nav-item">ABOUT</a>
        <a href="#" className="nav-item">MENU</a>
        <Link to="/booking" className="nav-item">RESERVATIONS</Link>
        <a href="#" className="nav-item">ORDER ONLINE</a>
        <a href="#" className="nav-item">LOGIN</a>
   
      </nav>
    )
  }
  

  