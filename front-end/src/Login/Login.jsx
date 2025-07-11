import { useState } from "react";
import { useNavigate } from "react-router-dom";
import usuariosData from '../Data/Usuarios.json'; 
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagem, setMensagem] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const usuarioEncontrado = usuariosData.find(user =>
      user.email === email &&
      user.senha === senha
    );

    if (usuarioEncontrado) {
      setMensagem('Login realizado com sucesso!');
      setTimeout(() => navigate('/receitas'), 1000); // redireciona após 1s
    } else {
      setMensagem('Usuário, email ou senha incorretos.');
    }
  };

  return (
 <div className="login-wrapper">
  <div className="container">
    <h1>Bem-vindo ao List & Cook!</h1>
    <form onSubmit={handleLogin}>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Senha"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
      />
        <button type="button" onClick={() => navigate('/cadastro')}>
        Cadastre-se
        </button>
        <br />
        <button type="submit">Entrar</button>

      {mensagem && <p>{mensagem}</p>}
    </form>
  </div>
</div>

  );
};

export default Login;
