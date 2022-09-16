import axios from "axios";
import { useState, useEffect } from "react";
import UserPool from "../../components/EditarUsuario/userPoll";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";

function TelaTarefa({ projID, show, setShow }) {
  const [carregar, setCarregar] = useState(true);
  const [usuarios, setUsuarios] = useState([]);
  const [tarefas, setTarefas] = useState([]);
  const [loading, setLoading] = useState("false");
  const [listaUser, setListaUser] = useState([]);
  const [projetos, setProjetos] = useState([]);
  const [form, setForm] = useState({
    id_t: 300,
    tarefa: "",
    descrição: "",
    data: "",
    projeto: projID + 1,
    usuario: [],
  });
  const navigate = useNavigate();
let projIDt =  projID +1
  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  let tarID = 300;
  loading &&
    tarefas.forEach((element) => {
      if (element.id_t > tarID) {
        tarID = element.id_t;
      }
      form["id_t"] = tarID + 1;
    });
  console.log(tarID);
  useEffect(() => {
    setLoading(false);
    async function fecthUsuario() {
      let response = await axios.get(
        "https://ironrest.herokuapp.com/85-wd-to-do"
      );
      setTarefas(response.data);
      setLoading(true);
    }
    fecthUsuario();
  }, []);

  useEffect(() => {
    setLoading(false);
    async function fecthUsuario() {
      let response = await axios.get(
        "https://ironrest.herokuapp.com/85-wd-project"
      );
      setProjetos(response.data);
      setLoading(true);
    }
    fecthUsuario();
  }, []);

  useEffect(() => {
    setLoading(false);
    async function fecthUsuario() {
      let response = await axios.get(
        "https://ironrest.herokuapp.com/85-wd-user"
      );
      setUsuarios(response.data);
      setLoading(true);
    }
    fecthUsuario();
  }, []);

  function vincularProjeto() {
    console.log('chamou')
    projetos.forEach((element) => {
      console.log('chamou2')
      if (element.id_p == projIDt) {
        const clonep = { ...element };
        clonep.tarefas.push(tarID + 1);

        Submitp(clonep);
      }
    });
  }

  async function Submitp(projetoss) {
   console.log(projetoss)

    try {
      let id = projetoss._id;
      delete projetoss._id;
      await axios.put(
        `https://ironrest.herokuapp.com/85-wd-project/${id}`,
        projetoss
      );
    } catch (error) {
      console.log(error);
    }
  }

  function appendar() {
    form.usuario.forEach((element1) => {
      usuarios.forEach((element2) => {
        if (element1 === element2.id_u) {
          const clone = { ...element2 };
          clone.tarefas.push(tarID + 1);
          Submit(clone);
        }
      });
    });
  }

  async function Submit(user) {
    try {
      let id = user._id;
      delete user._id;
      await axios.put(`https://ironrest.herokuapp.com/85-wd-user/${id}`, user);
    } catch (error) {}
  }

  async function handleSubmit(e) {
    e.preventDefault();

    appendar();

    vincularProjeto()

    try {
      await axios.post("https://ironrest.herokuapp.com/85-wd-to-do", form);
    } catch (error) {
      console.log(error);
    }
    navigate("/home");
  }

  function adicionarUsers() {
    listaUser.forEach((element) => {
      form.usuario.push(element.id);
      setCarregar(false);
    });
  }
  return (
    <div style={{ padding: "20px" }}>
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Adicionar Tarefa</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <form onSubmit={handleSubmit}>
              <div class="mb-3">
                <label label for="formGroupExampleInput" class="form-label">
                  Nome da Tarefa
                </label>
                <input
                  class="form-control"
                  id="formGroupExampleInput"
                  type="text"
                  name="tarefa"
                  placeholder="Nome da tarefa"
                  onChange={handleChange}
                />
              </div>
              <div class="mb-3">
                <label label for="formGroupExampleInput" class="form-label">
                  Descrição da Tarefa
                </label>
                <input
                  class="form-control"
                  id="formGroupExampleInput"
                  type="text"
                  name="descrição"
                  placeholder="Descrição da Tarefa"
                  onChange={handleChange}
                />
              </div>
              <div class="mb-3">
                <label label for="formGroupExampleInput" class="form-label">
                  Dead Line
                </label>
                <input
                  class="form-control"
                  id="formGroupExampleInput"
                  type="date"
                  name="data"
                  placeholder="Nome da tarefa"
                  onChange={handleChange}
                />
              </div>
              <button className="btn btn-primary" type="submit">
                Salvar
              </button>
            </form>
          </div>

          <>
            <br></br>
            <UserPool listaUser={listaUser} setListauser={setListaUser} />
          </>
          {carregar && (
            <div>
              {listaUser.map((element) => {
                return (
                  <p style={{ borderBottom: "1px black solid" }}>
                    {element.nome}
                  </p>
                );
              })}
              <button
                className="btn btn-secondary btn-sm"
                onClick={adicionarUsers}
              >
                Adicionar
              </button>
            </div>
          )}
        </Modal.Body>

        <Modal.Footer className="justify-content-between"></Modal.Footer>
      </Modal>
    </div>
  );
}

export default TelaTarefa;
