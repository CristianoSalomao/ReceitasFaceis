import { Link } from "react-router-dom";
import { BiFoodMenu, BiSearchAlt2 } from "react-icons/bi";

import "./Navbar.css";
 
const Navbar = () => {
    return(
        <nav id="navbar">
            <h2>
                <Link to="/"> 
                    <BiFoodMenu /> ReceitasFaceis 
                </Link>
            </h2>
            <form>
                <input type="text" placeholder="Pesquise a sua receita"/>
                <button type="submit">
                    <BiSearchAlt2 />
                </button>
            </form>
        </nav>
    )
}

export default Navbar;