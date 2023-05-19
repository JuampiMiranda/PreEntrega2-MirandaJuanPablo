import CartWidget from "../CartWidget/CartWidget"
import './NavBar.css'
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
    const imgGima = "../img/logo.png";
    return (
        <header>
            <Link to={"/"}>
                <img className="logoGima" src={imgGima} alt="Logo Gima" />
            </Link>
            <ul>
                <li>
                    <NavLink to={`/categoria/2`}>Fisioterapia</NavLink>
                </li>

                <li>
                    <NavLink to={`/categoria/3`} >Kinesiología</NavLink>
                </li>
            </ul>
            <CartWidget />
        </header>
    )
}

export default NavBar