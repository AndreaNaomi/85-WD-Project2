import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import EditProject from "../../components/editarProjeto";

function DetalhesProjetos() {
  const [tarefas, setTarefas] = useState([]);
  const [projetos, setProjetos] = useState([]);
  const [loading, setLoading] = useState(false);


  const { id } = useParams();
  let listatarefas = [];

  useEffect(() => {
    setLoading(false);
    async function fecthProject() {
      let response = await axios.get(
        `https://ironrest.herokuapp.com/85-wd-project/${id}`
      );
      setProjetos(response.data);
      setLoading(true);
    }
    fecthProject();
  }, []);
  console.log(projetos);

  useEffect(() => {
    async function fecthTarefa() {
      let response = await axios.get(
        `https://ironrest.herokuapp.com/85-wd-to-do`
      );
      setTarefas(response.data);
    }
    fecthTarefa();
  }, []);

 

  loading &&
    projetos.tarefas.forEach((element) => {
      tarefas.forEach((tarefa) => {
        if (tarefa.id_t === element) {
          listatarefas.push(tarefa);
        }
      });
    });

  return (
    <>
      {loading && (
        <div>
          <h1>{projetos.nomeprojeto}</h1>
          <p>{projetos.data}</p>
          <p>{projetos.opcoesprioridades}</p>
          <p>{projetos.statusProjeto}</p>
          <p>{projetos.descprojeto}</p>
        </div>
      )}
      <h1>ola</h1>
      <div>
        <h2> tarefas</h2>

        <table style={{ margin: "20px" }}>
          <thead>
            <tr>
              <th style={{ padding: "20px" }}>Tarefa</th>
              <th style={{ padding: "20px" }}>Descrição</th>
              <th style={{ padding: "20px" }}>
                <Link to="/CreateProject">
                  <button>Criar Tarefa</button>
                </Link>
              </th>
            </tr>
          </thead>
          <tbody>
            {loading &&
              listatarefas.map((element) => {
                return (
                  <tr>
                    <td style={{ padding: "20px" }}>
                      <p>{element.tarefa}</p>
                    </td>
                    <td style={{ padding: "20px" }}>
                      <p>{element.descrição} </p>
                    </td>

                    <td style={{ padding: "20px" }}>
                      <Link to={`/tarefa/${element._id}`}>
                        <button>Detalhes</button>
                      </Link>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
      <EditProject projeto={projetos} setProjeto={setProjetos} id={id}/>
    </>
  );
}

export default DetalhesProjetos;
