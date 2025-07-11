import { useState, useEffect } from 'react';
import receitaData from '../Data/Receitas.json';
import Header from '../Header/header';

function Receitas() {
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(receitaData);
  }, []);



  return (
    <>
      <Header />
      <div className="lista-container">
        <strong>{data.titulo}</strong>
        <ul>
          {data.ingredientes.map((ingrediente, idx) => (
            <li key={idx}>
              {ingrediente.quantidade} {ingrediente.unidade} de {ingrediente.item}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Receitas;
