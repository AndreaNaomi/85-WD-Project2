import axios from "axios";
import { useNavigate } from "react-router-dom"; 
import {useState} from 'react'
import DeleteUser from "../../components/DeletarUser";
function EditUser({usuario, setUsuario, id,listatarefa}) {
  /* const navigate = useNavigate(); */
  
  

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      delete usuario._id;

      await axios.put(
        `https://ironrest.herokuapp.com/85-wd-user/${id}`,
        usuario
      );

      
    } catch (error) {
      console.log(error);
    }
  }

  function handleChange(e) {
    setUsuario({ ...usuario, [e.target.name]: e.target.value });
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

  return(
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

      <button className="btn btn-primary" type="submit">Salvar</button>
      <DeleteUser  usuario={usuario} setUsuario={setUsuario} id={id} listatarefa={listatarefa} />
    </form>
  </div>
  
);
  
}

export default EditUser;
