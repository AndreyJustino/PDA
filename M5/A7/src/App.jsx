import { Outlet } from "react-router-dom"
import { Link } from "react-router-dom"

function App() {

  return (
    <>
      <ul>
        <li><Link to="/">Produtos</Link></li>
        <li><Link to="/cart">Cart</Link></li>
      </ul>
      
      <Outlet/>
    </>
  )
}

export default App
