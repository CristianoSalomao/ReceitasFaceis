import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import Card from "../Components/Card";

import "./PagesGrid.css";

const Search = () => {
  const [searchParams] = useSearchParams();

  const [receitas, setSearchReceitas] = useState([]);
  const [filteredReceitas, setFilteredReceitas] = useState([]);

  const query = searchParams.get("q");

  useEffect(() => {
    async function getData() {
      const response = await axios.get("http://localhost:3000/receitas");
      setSearchReceitas(response.data);
    }
    getData();
  }, []);

  useEffect(() => {
    if (query) {
      const filtered = receitas.filter((receita) =>
        receita.nome.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredReceitas(filtered);
    } else {
      setFilteredReceitas(receitas);
    }
  }, [query, receitas]);

  const isInvalidSearch = query && filteredReceitas.length === 0;

  return (
    <div className="container">
      <h2 className="title">
        Resultados para: <span className="query-text">{query}</span>
      </h2>
      {isInvalidSearch && <p className="title">Pesquisa inválida ou inexistente.</p>}
      <div className="receitas-container">
        {filteredReceitas.map((receita) => (
          <Card
            key={receita.id}
            image={receita.image}
            title={receita.nome}
            text={receita.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Search;