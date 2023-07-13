import { useState, useEffect } from "react";
import Card from "../Components/Card";
import axios from "axios";
import { Link } from "react-router-dom";

import "./PagesGrid.css";

const Home = () => {
    const [receitas, setReceitas] = useState([])

    useEffect(()=>{
        async function getData() {
            const response = await axios.get("http://localhost:3000/receitas")
            setReceitas(response.data)
        }
        getData()
    }, [])

    return(
        <div className="container">
            <h2 className="title">Receitas:</h2>
            <div className="receitas-container">
                {
                    receitas.map((receita) => {
                        return <Card image={receita.image} title={receita.nome} text={receita.description} id={receita._id.$oid} who="all"></Card>
                    })
                }
            </div>
            <Link to="/minhasreceitas" id="fab" >+</Link>
        </div>
    )
};

export default Home;