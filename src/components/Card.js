import React from "react";
import './card.css'

const CardComponent = ({ title, command, description, scenario }) => {
    return (
        <div className="card-container">
            <h2 className="card-title">{title}</h2>
            <p className="card-command">{command}</p>
            <p className="card-description">{description}</p>
            <p className="card-scenario">{scenario}</p>
        </div>
    );
};

export default CardComponent;
