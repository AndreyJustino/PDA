import { Link } from "react-router-dom"
import { useContext } from "react"
import {ThemeContext} from "../context/ThemeContext"

function NavBar() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <nav style={{backgroundColor: theme === "light" ? "#fff": "yellow", color: theme === "light" ? "#000": "#fff"}}>

      <Link to="/">Home</Link>
      <Link to="/cart">Carrinho</Link>
      <button onClick={toggleTheme}>Mudar Tema</button>

    </nav>
  )
}

export default NavBar