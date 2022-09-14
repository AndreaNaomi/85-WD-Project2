import axios from 'axios'
function EditProject({ projeto, setProjeto, id }) {
  async function handleSubmit(e) {
    e.preventDefault();

    try {
      delete projeto._id;

      await axios.put(
        `https://ironrest.herokuapp.com/85-wd-project/${id}`,
        projeto
      );
    } catch (error) {
      console.log(error);
    }
  }

  function handleChange(e) {
    setProjeto({ ...projeto, [e.target.name]: e.target.value });
  }
  return (
    <>
      <form
        style={{ display: "flex", flexDirection: "column", width: "25%" }}
        onSubmit={handleSubmit}
      >
        <label>Nome do Projeto</label>
        <input
          value={projeto.nomeprojeto}
          type="text"
          name="nomeprojeto"
          placeholder="Nome do Projeto"
          onChange={handleChange}
        />

        <label>Descrição do Projeto</label>
        <input
            value={projeto.descprojeto}
          type="text"
          name="descprojeto"
          placeholder="Descrição do Projeto"
          onChange={handleChange}
        />

        <label>Data de Conclusão</label>
        <input
            value={projeto.data}
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
    </>
  );
}

export default EditProject;
