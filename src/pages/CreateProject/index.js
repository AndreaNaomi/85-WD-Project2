import axios from "axios";
import { useState, useEffect } from "react";
import TelaTarefa from "../TelaTarefa";

function CreateProject() {
  const [projetos, setProjetos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const [form, setForm] = useState({
    id_p: 400,
    nomeprojeto: "",
    descprojeto: "",
    data: "",
    opcoesprioridades: "",
    statusProjeto: "",
    tarefas: [],
    usuarios: [],
  });

  let projID = 400;
  loading &&
    projetos.forEach((element) => {
      if (element.id_p > projID) {
        projID = element.id_p;
      }
    });

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
  }, [loading]);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    form["id_p"] = projID + 1;
    try {
      await axios.post("https://ironrest.herokuapp.com/85-wd-project", form);
    } catch (error) {
      console.log(error);
    }
    
  }

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <div class="mb-3">
            <label for="formGroupExampleInput" class="form-label">
              Nome do Projeto
            </label>
            <input class="form-control" id="formGroupExampleInput"
              type="text"
              name="nomeprojeto"
              placeholder="Nome do Projeto"
              onChange={handleChange}
            />
            </div>
          <div class="mb-3">
          <label for="formGroupExampleInput" class="form-label">
            Descrição do Projeto
          </label>
          <input class="form-control" id="formGroupExampleInput"
            type="text"
            name="descprojeto"
            placeholder="Descrição do Projeto"
            onChange={handleChange}
          />
          </div>
          <div class="mb-3">
            <label for="formGroupExampleInput" class="form-label">
              Data de Conclusão
            </label>
            <input class="form-control" id="formGroupExampleInput"
              type="date"
              name="data"
              placeholder="Data de Conclusão"
              onChange={handleChange}
            />
          </div>
          <div class="mb-3">
            <label for="formGroupExampleInput" class="form-label">
              Prioridade
            </label>
            <select
              className="form-control"
              name="opcoesprioridades"
              onChange={handleChange}
            >
              <option>Baixa</option>
              <option>Média</option>
              <option>Alta</option>
            </select>
          </div>
          <div>
            <label for="formGroupExampleInput" class="form-label">
              Status do Projeto
            </label>
            <select
              className="form-control"
              name="statusProjeto"
              onChange={handleChange}
            >
              <option>Em dia</option>
              <option>Em risco</option>
              <option>Em atraso</option>
            </select>
          </div>
          <button onClick={() => setShowForm(!showForm)} className="btn btn-primary" type="submit">salvar</button>
        </form>
      </div>

      {showForm === true && (
        <TelaTarefa
        show={showForm}
        setShow={setShowForm}
          projID={projID}
          projetos={projetos}
          setProjetos={setProjetos}
        />
      )}
    </>
  );
}

export default CreateProject;
