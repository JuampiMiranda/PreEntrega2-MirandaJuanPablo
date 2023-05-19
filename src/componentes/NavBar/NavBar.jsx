import CartWidget from "../CartWidget/CartWidget"
import './NavBar.css'
import { NavLink, Link } from "react-router-dom";
import imgGima from "../../assets/logo.png"

const NavBar = () => {
    return (
        <header>
            <Link to={"/"}>
                <img className="imgGima" src={imgGima} alt="Logo Gima" />
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