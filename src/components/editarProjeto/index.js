import axios from "axios";
import DeleteProject from "../deleteProject";
import Modal from "react-bootstrap/Modal";
function EditProject({ projeto, setProjeto, id, show, setShow }) {
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
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Editar Tarefa</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <div class="mb-3">
              <label for="formGroupExampleInput" class="form-label">
                Nome do Projeto
              </label>
              <input
                class="form-control"
                id="formGroupExampleInput"
                value={projeto.nomeprojeto}
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
              <input
                class="form-control"
                id="formGroupExampleInput"
                value={projeto.descprojeto}
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
              <input
                class="form-control"
                id="formGroupExampleInput"
                value={projeto.data}
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
            <div class="mb-3">
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
            <button  onClick={() => setShow(!show) }className="btn btn-primary" type="submit">
              Salvar
            </button>
          </form>
        </Modal.Body>
        
        <Modal.Footer className="justify-content-between">
        <DeleteProject projeto={projeto} />
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditProject;
