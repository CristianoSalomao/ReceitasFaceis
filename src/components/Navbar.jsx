import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiFoodMenu, BiSearchAlt2, BiPlus, BiHome } from "react-icons/bi";

import "./Navbar.css";
 
const Navbar = () => {
    const [search, setSearch] = useState("")
    const navigate = useNavigate();

    const handleSubmit = (e) =>{
        e.preventDefault()
        
        if(!search) return

        navigate(`/search?q=${search}`); 
        setSearch("");
    };

    return(
        <nav id="navbar">
            <h2>
                <Link to="/"> 
                    <BiFoodMenu /> ReceitasFaceis 
                </Link>
            </h2>
            <div>
            <span className="Btn-SubmitReceitas" onClick={() => navigate('/MinhasReceitas')}>
                    <button type="submit">
                        <BiHome/>
                    </button>
                    MinhasReceitas
                </span>

                <span className="Btn-SubmitReceitas" onClick={() => navigate('/AddReceita')}>
                    <button type="submit">
                        <BiPlus/>
                    </button>
                    Adicionar receita
                </span>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Pesquise a sua receita" 
                    onChange={(e) => setSearch(e.target.value)}
                    value={search}
                    />
                    <button type="submit">
                        <BiSearchAlt2 />
                    </button>
                </form>
            </div>
        </nav>
    )
}

export default Navbar;