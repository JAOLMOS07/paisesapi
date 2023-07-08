import {React,useState} from 'react';
import './PaisItem.css';
const PaisItem = (props) => {
  const [showMoreInfo, setShowMoreInfo] = useState(true);
  const [showFronteras, setShowFronteras] = useState(false);
  const formattedPopulation = props.pais.population.toLocaleString();
  const handleMoreInfoClick = () => {
    setShowMoreInfo(!showMoreInfo);
  };
  const handleBordersClick = () => {
    setShowFronteras(!showFronteras);
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
              <div className="borders">
              <button className="btn-borders" onClick={handleBordersClick}>
              {showFronteras ? ('VER FRONTERAS'):('OCULTAR FRONTERAS')}
              </button>
              </div>
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