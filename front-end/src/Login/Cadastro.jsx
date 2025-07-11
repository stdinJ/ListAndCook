import React from 'react'

const Cadastro = () => {
  return (
    <div>
      <h1>Cadastro</h1>
      <p>Por favor, preencha os campos abaixo para se cadastrar:</p>
      <form>
        <input type="text" placeholder="Nome de usuário" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Senha" required />
        <button type="submit">Cadastrar</button>
      </form> 
    </div>
  )
}

export default Cadastro