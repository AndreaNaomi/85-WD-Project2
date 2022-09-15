import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import DeleteTarefa from "../deteltarTarefa";
import Modal from "react-bootstrap/Modal";

function TaskeEdit({ tarefa, setTarefa, id, show, setShow }) {
  /* const navigate = useNavigate(); */

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      delete tarefa._id;

      await axios.put(
        `https://ironrest.herokuapp.com/85-wd-to-do/${id}`,
        tarefa
      );
    } catch (error) {
      console.log(error);
    }
  }

  function handleChange(e) {
    setTarefa({ ...tarefa, [e.target.name]: e.target.value });
  }

  /*  async function handleDelete() {
    try {
      await axios.delete(
        `https://ironrest.herokuapp.com/wd-85-ft/${studentID}`
      );

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  } */
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
                Nome da Tarefa
              </label>
              <input
                type="text"
                class="form-control"
                id="formGroupExampleInput"
                value={tarefa.tarefa}
                name="tarefa"
                placeholder="Nome da tarefa"
                onChange={handleChange}
              />
            </div>
            <div class="mb-3">
              <label for="formGroupExampleInput" class="form-label">
                Descrição da Tarefa
              </label>
              <input
                class="form-control"
                id="formGroupExampleInput"
                value={tarefa.descrição}
                type="text"
                name="descrição"
                placeholder="Descrição da Tarefa"
                onChange={handleChange}
              />
            </div>

            <button onClick={() => setShow(!show)}  className="btn btn-primary" type="submit">Salvar</button>
          </form>
        </Modal.Body>
        <Modal.Footer className="justify-content-between">
          <DeleteTarefa id={id} tarefa={tarefa} setTarefa={setTarefa} />
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default TaskeEdit;
