import React, { useState } from 'react';
import './App.css';
import Busqueda from './components/busqueda';
import ListaPaises from './components/listaPaises';

function App() {
  const [buscado, setBuscado] = useState('');

  const handleBuscarDatos = (pais) => {
    setBuscado(pais);
  };

  const paises = buscado.split(',').map((pais, index) => (
    <ListaPaises key={index} buscado={pais.trim()} />
  ));

  return (
    <div>
      <Busqueda onBuscar={handleBuscarDatos} />
      {paises}
    </div>
  );
}

export default App;