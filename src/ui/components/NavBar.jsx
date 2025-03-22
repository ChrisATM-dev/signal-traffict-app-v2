import { useContext } from "react";
import { AuthContext } from "../../auth";

import '../styles/NavBar.css';
export const NavBar = () => {
    const {logout} = useContext(AuthContext);
  return (
    <nav className="navbar-container">
        <img className="navbar-logo" src="/image/cheems-carrito.png" alt="cheems-carrito" />
        <h3>Maneja con cheems</h3>
        <button onClick={logout}>Logout</button>
    </nav>
  )
}
