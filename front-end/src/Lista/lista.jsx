import { useState } from 'react';
import './lista.css'

function ListaCompras() {
  const [novoItem, setNovoItem] = useState('');
  const [itens, setItens] = useState([]);

  const adicionarItem = () => {
    //verifica se o campo de texto está vazio
    if (novoItem.trim() !== '') {
      const item = {
        nome: novoItem,
        comprado: false
      };
      setItens([...itens, item]);
      setNovoItem('');
    }
  };

  const marcarComoComprado = (index) => {
    const novosItens = [...itens];
    novosItens[index].comprado = !novosItens[index].comprado;
    setItens(novosItens);
  };

  const removerItem = (index) => {
    const novosItens = itens.filter((_, i) => i !== index);
    setItens(novosItens);
  };

  return (
    <div className="lista-container">
      <h2>Lista de Compras</h2>

      <div className="input-area">
        <input
          type="text"
          placeholder="Adicionar item..."
          value={novoItem}
          onChange={(e) => setNovoItem(e.target.value)}
        />
        <button onClick={adicionarItem}>Adicionar</button>
      </div>

      <ul className="lista-itens">
        {itens.map((item, index) => (
          <li key={index} className={item.comprado ? 'comprado' : ''}>
            <span onClick={() => marcarComoComprado(index)}>
              {item.nome}
            </span>
            <button onClick={() => removerItem(index)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaCompras;