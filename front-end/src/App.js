import './App.css';
import Header from './Header/header';
import ListaCompras from './Lista/lista';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<h2>Bem-vindo ao List & Cook!</h2>} />
        <Route path="/lista" element={<ListaCompras />} />
      </Routes>
    </Router>
  );
}

export default App;
