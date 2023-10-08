import {React,useState} from 'react';
import './PaisItem.css';
const PaisItem = (props) => {
  
  const [showMoreInfo, setShowMoreInfo] = useState(true);

  const formattedPopulation = props.pais.population.toLocaleString();
  const handleMoreInfoClick = () => {
    setShowMoreInfo(!showMoreInfo);
  };

  return (
    <div className="pais-item">
      <img className="bandera" src={props.pais.flag.png} alt={props.pais.flag.alt} />
      <div className="info">
        <h2>{props.pais.name}</h2>
        <p>Población: {formattedPopulation}</p>
      </div>
      {showMoreInfo && (
        <div className="additional-info">
          <p>Capital: {props.pais.capital}</p>
          <p>Lenguajes:</p>
          <ul>
            {Object.values(props.pais.languages).map((language, index) => (
              <li key={index}>{language}</li>
            ))}
          </ul>
          <div className="google-map">
          <a
                href={props.pais.map}
                target="_blank"
                rel="noopener noreferrer"
                className="google-map-link"
              >
                Ver en Google Maps
              </a>
              
            </div>

            
        </div>
        
      )}
      <button className="btn-more-info" onClick={handleMoreInfoClick}>
        {showMoreInfo ? ('Ocultar'):('ver más')}
      </button>
    </div>
  );
};

export default PaisItem;