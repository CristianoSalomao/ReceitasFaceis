import { useState, useEffect } from "react";
import Card from "../Components/Card";
import axios from "axios";



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
        <div className="">
            <div className="">
                {
                    receitas.map((receita) => {
                        return <Card image={receita.image} title={receita.nome} ></Card>
                    })
                }
            </div>
        </div>
    )
};

export default Home;