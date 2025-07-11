import { useState } from 'react';
import './lista.css'
import Header from '../Header/header';


function ListaCompras() {
  const [novoItem, setNovoItem] = useState('');
  const [itens, setItens] = useState([]);

  const adicionarItem = () => {
    if (novoItem.trim() !== '') {
      const novo = { nome: novoItem, quantidade: 1, comprado: false };
      setItens([...itens, novo]);
      setNovoItem('');
    }
  };

  const incrementar = (index) => {
    const novosItens = [...itens];
    novosItens[index].quantidade += 1;
    setItens(novosItens);
  };

  const decrementar = (index) => {
    const novosItens = [...itens];
    if (novosItens[index].quantidade > 0) {
      novosItens[index].quantidade -= 1;
      setItens(novosItens);
    }
  };

  const removerItem = (index) => {
    const novosItens = itens.filter((_, i) => i !== index);
    setItens(novosItens);
  };

  const marcarComoComprado = (index) => {
    const novosItens = [...itens];
    novosItens[index].comprado = !novosItens[index].comprado;
    setItens(novosItens);
  };

  return (
         
      <><Header /><div className="lista-container">

      <h2>Lista de Compras</h2>

      <div className="input-area">
        <input
          type="text"
          placeholder="Adicionar item..."
          value={novoItem}
          onChange={(e) => setNovoItem(e.target.value)} />
        <button onClick={adicionarItem}>Adicionar</button>
      </div>

      <ul className="lista-itens">
        {itens.map((item, index) => (
          <li key={index} className={item.comprado ? 'comprado' : ''}>
            <span onClick={() => marcarComoComprado(index)}>
              {item.nome}
            </span>
            <button onClick={() => incrementar(index)}>+</button>
            <button onClick={() => decrementar(index)}>-</button>
            {item.quantidade}x
            <button onClick={() => removerItem(index)}>❌</button>
          </li>
        ))}
      </ul>
    </div></>
  );
}

export default ListaCompras;
