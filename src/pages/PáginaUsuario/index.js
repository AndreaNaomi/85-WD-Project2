import axios from "axios";
import { useState, useEffect } from "react";
import UserPool2 from "../../components/userpool2";

function PaginaUsuario() {
  const [loading, setLoading] = useState("false");
  const [usuarios, setUsuarios] = useState([]);
  const [clicou, setClicou] = useState(false);

  const [form, setForm] = useState({
    id_u: "",
    nome: "",
    email: "",
    departamento: "",
    tarefas: [],
    projetos: [],
  });

  let userID = 200;
  loading &&
    usuarios.forEach((element) => {
      if (element.id_u > userID) {
        userID = element.id_u;
      }
    });

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

  async function handleSubmit(e) {
    e.preventDefault();
    form["id_u"] = userID + 1;

    try {
      await axios.post("https://ironrest.herokuapp.com/85-wd-user", form);
    } catch (error) {
      console.log(error);
    }

    setClicou(!clicou);
  }
  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>

          <div class="mb-3">
            <label for="formGroupExampleInput" class="form-label">
              Nome
            </label>
            <input
              class="form-control"
              id="formGroupExampleInput"
              type="text"
              name="nome"
              placeholder="Nome"
              onChange={handleChange}
            />
          </div>
          <div class="mb-3">
            <label for="formGroupExampleInput" class="form-label">
              Email
            </label>
            <input
              class="form-control"
              id="formGroupExampleInput"
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label for="formGroupExampleInput" class="form-label">
              Departamento
            </label>
            <input
              class="form-control"
              id="formGroupExampleInput"
              type="text"
              name="departamento"
              placeholder="Departamento"
              onChange={handleChange}
            />
          </div>
          <button className="btn btn-primary" type="submit">
            Salvar
          </button>

        </form>
      </div>
      <h1>usuarios</h1>
      <UserPool2 clicou={clicou} />
    </>
  );
}

export default PaginaUsuario;
