import Input from "./Input"
import Usuarios from "./Usuarios"
import userLogo from './assets/avatar.png'
function App() {
  

  return (
    <div class="login-container">
      <form class="login-form">
        <img src={userLogo} alt="Usuario"/>
        <h2>Iniciar sesión</h2>
        <Usuarios />        
        <div class="input-group">
          <label for="password">Contraseña:</label>
          <Input/>
        </div>
        <div class="input-group">
          <label for="email">Correo electrónico:</label>
          <Input/>
        </div>
        <button type="submit">Iniciar sesión</button>
      </form>
    </div>
  )
}

export default App
