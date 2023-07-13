import { Link } from "react-router-dom";

import React from "react";
import "./Card.css"

function Card({title, image, text, id, who}){
    return(
        <div className="card-container">
            <div className="image-container">
                <img src={image} />
            </div>
            <div className="card-content">
                <div className="card-title">
                    <h3>{title}</h3>
                </div>
                <div className="card-text">
                    <p>{text}</p>
                </div>
            </div>

            <div className="btn">
                <button>
                    <a>
                        <Link to={`/Receitas/${who}/${id}`}>
                            Confira a receita!
                        </Link>
                    </a>
                </button>
            </div>
        </div>
    )
}

export default Card;