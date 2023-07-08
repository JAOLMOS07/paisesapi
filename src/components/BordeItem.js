import React from 'react';
import './BordeItem.css';
const BordeItem = (props) => {

return (
    <div className="frontera-item">
        <img className="bandera" src={props.pais.flag.png} alt={props.pais.flag.alt} />
        <p>{props.pais.name}</p>
        <p>Capital: {props.pais.capital}</p>
    </div>
    );
};

export default BordeItem;