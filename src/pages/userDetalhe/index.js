import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import EditUser from "../EditarUsuario";

function UserDetalhe() {
  const [loading, setLoading] = useState(false);
  const [usuario, setUsuario] = useState([
    {
      id_u: "",
      nome: "",
      email: "",
      departamento: "",
      tarefas: [],
      projetos: [],
    },
  ]);
  const [tarefas, setTarefa] = useState([]);
  const { id } = useParams();
  const listatarefa = [];

  useEffect(() => {
    setLoading(false);
    async function fecthUsuario() {
      let response = await axios.get(
        `https://ironrest.herokuapp.com/85-wd-user/${id}`
      );
      setUsuario(response.data);
      setLoading(true);
    }
    fecthUsuario();
  }, []);

  useEffect(() => {
    async function fecthTarefas() {
      let response = await axios.get(
        `https://ironrest.herokuapp.com/85-wd-to-do`
      );
      setTarefa(response.data);
    }
    fecthTarefas();
  }, []);

  loading &&
    usuario.tarefas.forEach((element) => {
      tarefas.forEach((tarefa) => {
        if (tarefa.id_t === element) {
          listatarefa.push(tarefa);
        }
      });
    });

  console.log(listatarefa);

  return (
    <>
      {loading && (
        <div>
          <h1>{usuario.nome}</h1>
          <p>{usuario.email}</p>
          <p>{usuario.departamento}</p>
        </div>
      )}
      
      <div>
        <h2> tarefas</h2>

        <table class="table table-hover" style={{ margin: "20px" }}>
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
              listatarefa.map((element) => {
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
      <EditUser id={id} usuario={usuario} setUsuario={setUsuario} listatarefa={listatarefa} />
    </>
  );
}

export default UserDetalhe;
