import React, { useState, useEffect } from "react";
import axios from 'axios'
import PaisItem from "./paisItem";

const ListaPaises = (props) =>{
    
    const [state, setState] = useState(1);
    const [paises, setPaises] = useState([]);
    const hook = () => {
        console.log('effect');
        axios
        .get('https://restcountries.com/v3.1/translation/'+ props.buscado+'?fields=name,translations,population,flags,capital,languages,maps' )
        .then(response => {
            console.log('promise fulfilled');

            const countryData = response.data.map((country) => ({
                name: country.translations.spa.common,
                population: country.population,
                flag: country.flags,
                capital: country.capital,
                languages: Object.values(country.languages),
                map: country.maps.googleMaps
              }));
        
            //console.log(countryData);
            setPaises(countryData);
            if (response.data.length <= 50) {
              setState(1); // Si hay más de 10 países, establecer el estado en 2
            } else {
                setState(2);
            }
        })
        .catch(error => {
            console.log('no se encontró el país',error);
            setState(0);
        });
    };

    useEffect(hook, [props.buscado])
    if(props.buscado === ''){
        return null;

    }else if(state === 0)
    {
        return(<div>No se encontró información del pais buscado.</div>)

    }else if(paises.length > 0 && paises.length <= 20){
        return(
            <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
            {paises.map(pais => (
                <li key={pais.name}>
                    <PaisItem
                        pais = {pais}
                    />
                </li>
            )

            )}
        </ul>
        )
    }else{
        return(<div>Debe especificar más su busqueda</div>)
    }


}

export default ListaPaises;