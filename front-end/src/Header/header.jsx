import { Link } from 'react-router-dom';
import '../Header/header.css';

function Header() {
    return (
        <header className="App-header">
            <div className="logo">
                <p className='titulo'>List and cook</p>
            </div>
            <nav className="navbar">
                <ul className="navbar-links">
                    <li><Link to="/">Início</Link></li>
                    <li><Link to="/receitas">Receitas</Link></li>
                    <li><Link to="/lista">Lista de Compras</Link></li>
                    <li><Link to="/sobre">Sobre</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
