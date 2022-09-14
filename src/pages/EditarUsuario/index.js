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
      <label>Nome</label>
      <input
        value={usuario.nome}
        type="text"
        name="nome"
        placeholder="Nome"
        onChange={handleChange}
      />

      <label>Email</label>
      <input
        value={usuario.email}
        type="email"
        name="email"
        placeholder="Email"
        onChange={handleChange}
      />

      <label>Departamento</label>
      <input
        value={usuario.departamento}
        type="text"
        name="departamento"
        placeholder="Departamento"
        onChange={handleChange}
      />

      <button type="submit">Salvar</button>
    </form>
    <DeleteUser usuario={usuario} setUsuario={setUsuario} id={id} listatarefa={listatarefa} />
  </div>
  
);
  
}

export default EditUser;
