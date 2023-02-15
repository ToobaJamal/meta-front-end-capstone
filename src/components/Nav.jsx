import { Outlet, Link } from "react-router-dom"

export default function Nav() {

    return (
      <nav>
     
        <Link to="/">HOME</Link>
        <a href="#">ABOUT</a>
        <a href="#">MENU</a>
        <a href="#">RESERVATIONS</a>
        <a href="#">ORDER ONLINE</a>
        <a href="#">LOGIN</a>
   
      </nav>
    )
  }
  

  