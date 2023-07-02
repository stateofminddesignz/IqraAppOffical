import React from "react";
import '../App.css'



const DhikrCard = ({imageUrl , title , description }) => {
    return(
       <div className="card">
        <img src={`./images/${imageUrl}`} alt={title} className="card-image" ></img>
        <div className="card-content">
            <h2 className="card-title">{title}</h2>
            <p className="card-description">{description}</p>
            
        </div>
       </div>

    )
}

export default DhikrCard;