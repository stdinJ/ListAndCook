import './App.css';
import Header from './Header/header';
import ListaCompras from './Lista/lista';
import Receitas from './Receitas/Receitas';
import Login from './Login/Login';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/lista" element={<ListaCompras />} />
        <Route path="/receitas" element={<Receitas />} />
      </Routes>
    </Router>
  );
}

export default App;
