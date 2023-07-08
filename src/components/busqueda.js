import React, { useState } from "react";
import "./Busqueda.css";
const Busqueda = (props) => {
    const [pais, setPais] = useState("");

    const handlePaisChange = (event) => {
        setPais(event.target.value);
    };
    const handleBuscarClick = (event) => {
        event.preventDefault()
        if(pais !== '' )
        {
            props.onBuscar(pais)
            
        }
    }

    return (
        <form className="busqueda-form">
          <div className="busqueda-container">
            <label htmlFor="pais" className="busqueda-label">
              Buscar país:
            </label>
            <input
              type="text"
              id="pais"
              value={pais}
              onChange={handlePaisChange}
              className="busqueda-input"
            />
            <button onClick={handleBuscarClick} className="busqueda-button">
              Buscar
            </button>
          </div>
        </form>
      );
    };
export default Busqueda;