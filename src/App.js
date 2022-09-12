import './App.css';
import { Route, Routes } from "react-router-dom";
import TelaInicial from './pages/TelaInicial';
import HomePage from './pages/HomePage';
import PaginaUsuario from './pages/PáginaUsuario';

function App() {
  return (
    <div className="App">


    <Routes>

    <Route path="/" element={<TelaInicial />} />
    <Route path="/Home" element={<HomePage />} />
    <Route path="/PaginaUsuario" element={<PaginaUsuario />} />

    </Routes>

    </div>
  );
}

export default App;
