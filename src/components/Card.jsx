import React from "react";
import "./Card.css"

function Card({nome, image, text}){
    return(
        <div className="card-container">
            <div className="image-container">
                <img src={image} />
            </div>
            <div className="card-content">
                <div className="card-title">
                    <h3>{nome}</h3>
                </div>
                <div className="card-text">
                    <p>{text}</p>
                </div>
            </div>

            <div className="btn">
                <button>
                    <a>
                        Confira a receita!
                    </a>
                </button>
            </div>
        </div>
    )
}

export default Card