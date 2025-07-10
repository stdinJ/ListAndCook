import { useState, useEffect } from 'react';
import receitasData from '../Data/Receitas.json'; 

function Receitas() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData([receitasData]); 
  }, []);

  return (
    <ul>
      {data.map((item, index) => (
        <li key={index}>
          <strong>{item.titulo}</strong>
          <ul>
            {item.ingredientes.map((ingrediente, idx) => (
              <li key={idx}>
                {ingrediente.quantidade} {ingrediente.unidade} de {ingrediente.item}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}

export default Receitas;
