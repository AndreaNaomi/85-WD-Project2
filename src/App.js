import './App.css';
import { Route, Routes } from "react-router-dom";
import TelaInicial from './pages/TelaInicial';
import HomePage from './pages/HomePage';
import PaginaUsuario from './pages/PáginaUsuario';
import TelaTarefa from './pages/TelaTarefa';
import CreateProject from './pages/CreateProject';

function App() {
  return (
    <div className="App">


    <Routes>

    <Route path="/" element={<TelaInicial />} />
    <Route path="/Home" element={<HomePage />} />
    <Route path="/PaginaUsuario" element={<PaginaUsuario />} />
    <Route path="/TelaTarefa" element={<TelaTarefa />} />
    <Route path="/CreateProject" element={<CreateProject />} />

    </Routes>

    </div>
  );
}

export default App;
