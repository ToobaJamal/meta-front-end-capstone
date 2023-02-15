import { Outlet, Link } from "react-router-dom"

export default function Nav() {

    return (
      <nav>
     
        <Link to="/">HOME</Link>
        <a href="#">ABOUT</a>
        <a href="#">MENU</a>
        <Link to="/booking">RESERVATIONS</Link>
        <a href="#">ORDER ONLINE</a>
        <a href="#">LOGIN</a>
   
      </nav>
    )
  }
  

  