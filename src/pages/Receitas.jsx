import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./Receita.css";

const Receitas = () => {
  const [receitas, setReceitas] = useState([]);
  const { id, who } = useParams();

  useEffect(() => {
    if(who == 'all'){
      async function fetchData() {
        try {
          const response = await axios.get("http://localhost:3000/receitas");
  
          setReceitas(
            response.data.filter((receita) => receita._id.$oid === id)
          );
        } catch (error) {
          console.error("Erro ao buscar as receitas:", error);
        }
      }
  
      fetchData();
    } else {
      setReceitas(
        JSON.parse(localStorage.getItem('receitas')).filter((receita) => receita.id === id)
      );

      console.log(JSON.parse(localStorage.getItem('receitas')).filter((receita) => receita.id === id))
    }
  }, [id]);

  return (
    <div className="receitas-master">
      <div className="receitas-containers">
        {receitas.map((receita) => (
          <div key={who == "all" ? receita._id.$oid : receita.id}>
            <h2 className="receitas-nome">{receita.nome}</h2>
            <img src={receita.image} alt={receita.nome} />
            {receita.secao.map((secao) => (
              <div key={secao.nome}>
                <h3>{secao.nome}</h3>
                <div>
                  {Array.isArray(secao.conteudo) ? (
                    <ul style={{ listStyleType: "none", padding: 0 }}>
                      {secao.conteudo.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  ) : (
                    <p>{secao.conteudo}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Receitas;