import axios from "axios";
import { useState } from "react";

function CreateProject() {
  const [form, setForm] = useState({
    nomeprojeto: "",
    descprojeto: "",
    data: "",
    opcoesprioridades: "",
    statusProjeto: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await axios.post("https://ironrest.herokuapp.com/85-wd-project", form);
    } catch (error) {
      console.log(error);
    }
  }

  console.log(form);

  return (
    <div>
      <form
        style={{ display: "flex", flexDirection: "column", width: "25%" }}
        onSubmit={handleSubmit}
      >
        <label>Nome do Projeto</label>
        <input
          type="text"
          name="nomeprojeto"
          placeholder="Nome do Projeto"
          onChange={handleChange}
        />

        <label>Descrição do Projeto</label>
        <input
          type="text"
          name="descprojeto"
          placeholder="Descrição do Projeto"
          onChange={handleChange}
        />

        <label>Data de Conclusão</label>
        <input
          type="date"
          name="data"
          placeholder="Data de Conclusão"
          onChange={handleChange}
        />

        <label>Prioridade</label>
        <select
          className="form-control"
          name="opcoesprioridades"
          onChange={handleChange}
        >
          <option>Baixa</option>
          <option>Média</option>
          <option>Alta</option>
        </select>

        <label>Status do Projeto</label>
        <select
          className="form-control"
          name="statusProjeto"
          onChange={handleChange}
        >
          <option>Em dia</option>
          <option>Em risco</option>
          <option>Em atraso</option>
        </select>

        <button type="submit">subbmit</button>
      </form>
    </div>
  );
}

export default CreateProject;
