import { Outlet } from 'react-router-dom';
const App = () => {
  return (
    <div>
      <h1>Lista de material </h1>
      <Outlet /> {/* Renderiza as rotas aninhadas */}
    </div>
  );
};
export default App;