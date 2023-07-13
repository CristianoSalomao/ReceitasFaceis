import { useState, useEffect } from "react"
import Card from "../Components/Card"

export default function MinhasReceitas(){
    const [receitas, setReceitas] = useState()

    useEffect(() => {
        setReceitas(JSON.parse(localStorage.getItem('receitas')))
    }, [])

    return(
        <div id="MinhasReceitas-div">
            <h1 id="MinhasReceitas-h1">Sem receitas no momento!</h1>
            {
                receitas?.map((receita) => {
                    return <Card image={receita.image} title={receita.nome} text={receita.description} id={receita.id} who="my"></Card>
                })
            }
        </div>
    )
}