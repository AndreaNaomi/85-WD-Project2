import './App.css';
import { Route, Routes } from "react-router-dom";
import TelaInicial from './pages/TelaInicial';
import HomePage from './pages/HomePage';
import PaginaUsuario from './pages/PáginaUsuario';
import TelaTarefa from './pages/TelaTarefa';
import CreateProject from './pages/CreateProject';
import DetalhesProjetos from './pages/detalhesProjetos';
import DetalheTarefa from './pages/detalhesTarefas';
import UserDetalhe from './pages/userDetalhe';
import NavBar from './components/NavBAr';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar/>

    <Routes>

    <Route path="/" element={<TelaInicial />} />
    <Route path="/Home" element={<HomePage />} />
    <Route path="/PaginaUsuario" element={<PaginaUsuario />} />
    <Route path="/TelaTarefa" element={<TelaTarefa />} />
    <Route path="/CreateProject" element={<CreateProject />} />
    <Route path="/projetos/:id" element={<DetalhesProjetos />}/>
    <Route path='/tarefa/:id' element={<DetalheTarefa/>}/>
    <Route path='/usuario/:id' element={<UserDetalhe/>}/>
    </Routes>

    </div>
  );
}

export default App;
