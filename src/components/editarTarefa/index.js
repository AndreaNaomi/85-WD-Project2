import axios from "axios";
import { useNavigate } from "react-router-dom"; 
import {useState} from 'react'
import DeleteTarefa from "../deteltarTarefa";

function TaskeEdit({tarefa, setTarefa, id}) {

  


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
    return (  <>
            <form onSubmit={handleSubmit}>
            <label>Nome da Tarefa</label>
          <input
            value={tarefa.tarefa}
            type="text"
            name="tarefa"
            placeholder="Nome da tarefa"
            onChange={handleChange}
          />

          <label>Descrição da Tarefa</label>
          <input
            value={tarefa.descrição}
            type="text"
            name="descrição"
            placeholder="Descrição da Tarefa"
            onChange={handleChange}
          />

          <button type="submit">Salvar</button>
            </form>
      <DeleteTarefa id={id} tarefa={tarefa} setTarefa={setTarefa} />
    </>);
}

export default TaskeEdit;