import { useState, useEffect } from "react";
import axios from "axios";

function DeleteUser({ usuario, setUsuario, id, listatarefa }) {
  const [tarefas, setTarefas] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(false);
    async function fecthTarefa() {
      let response = await axios.get(
        "https://ironrest.herokuapp.com/85-wd-to-do"
      );
      setTarefas(response.data);
      setLoading(true);
    }
    fecthTarefa();
  }, []);
function deletar(){
  listatarefa.map((tarelement) => {
    tarefas.map((element) => {
      if (element.id_t === tarelement.id_t) {
        const clone = { ...element };
        let index = clone.usuario.indexOf(usuario.id_u);
        clone.usuario.splice(index, 1);
        submit(clone);
      }
    });
  });
}

  async function submit(projeto) {
    try {
      let id = projeto._id;
      delete projeto._id;
      await axios.put(
        `https://ironrest.herokuapp.com/85-wd-to-do/${id}`,
        projeto
      );
    } catch (error) {}
  }



  async function handleDelete() {
    deletar()
    try {
      await axios.delete(`https://ironrest.herokuapp.com/85-wd-user/${usuario._id}`);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <button className="btn btn-danger" onClick={handleDelete}>deletar</button>
    </>
  );
}

export default DeleteUser;
