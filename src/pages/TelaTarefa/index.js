import axios from "axios";
import { useState, useEffect } from "react";
import UserPool from "../../components/EditarUsuario/userPoll";

function TelaTarefa({ projID, projetos, setProjetos }) {
  const [usuarios, setUsuarios] = useState([]);
  const [tarefas, setTarefas] = useState([]);
  const [loading, setLoading] = useState("false");
  const [listaUser, setListaUser] = useState([]);
  const [form, setForm] = useState({
    id_t: 300,
    tarefa: "",
    descrição: "",
    projeto: projID + 1,
    usuario: [],
  });

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
        "https://ironrest.herokuapp.com/85-wd-user"
      );
      setUsuarios(response.data);
      setLoading(true);
    }
    fecthUsuario();
  }, []);

  function vincularProjeto() {
    projetos.forEach((element) => {
      if (element.id_p == projID) {
        const clonep = { ...element };
        clonep.tarefas.push(tarID + 1);

        Submitp(clonep);
      }
    });
  }

  async function Submitp(projeto) {
    try {
      let id = projeto._id;
      delete projeto._id;
      await axios.put(
        `https://ironrest.herokuapp.com/85-wd-project/${id}`,
        projeto
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

    console.log(tarID);
    appendar();

    vincularProjeto();

    try {
      await axios.post("https://ironrest.herokuapp.com/85-wd-to-do", form);
    } catch (error) {
      console.log(error);
    }
  }

  function adicionarUsers() {
    listaUser.forEach((element) => {
      form.usuario.push(element.id);
    });
  }
  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <label>Nome da Tarefa</label>
          <input
            type="text"
            name="tarefa"
            placeholder="Nome da tarefa"
            onChange={handleChange}
          />

          <label>Descrição da Tarefa</label>
          <input
            type="text"
            name="descrição"
            placeholder="Descrição da Tarefa"
            onChange={handleChange}
          />

          <button type="submit">Salvar</button>
        </form>
      </div>

      <br></br>
      <UserPool listaUser={listaUser} setListauser={setListaUser} />
      <div>
        {listaUser.map((element) => {
          return <p>{element.nome}</p>;
        })}
        <button onClick={adicionarUsers}>Adicionar</button>
      </div>
    </>
  );
}

export default TelaTarefa;
