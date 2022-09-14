import { useState, useEffect } from "react";
import axios from "axios";

function DeleteTarefa({  setTarefa, id}) {
  const [tarefa, setUtarefas] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(false);
    async function fecthTUsuario() {
      let response = await axios.get(
        `https://ironrest.herokuapp.com/85-wd-to-do/${id}`
      );
      setUtarefas(response.data);
      setLoading(true);
    }
    fecthTUsuario();
  }, []);



/* function deletaruser(){
  tarefa.usuarios.map((userlement) => {
    usuarios.map((element) => {
      if (element.id_t === userlement.id_t) {
        const clone = { ...element };
        let index = clone.tarefas.indexOf(tarefa.id_u);
        clone.usuario.splice(index, 1);
        submit(clone);
      }
    });
  });
}
 */
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
    
    try {
      await axios.delete(`https://ironrest.herokuapp.com/85-wd-to-do/${tarefa._id}`);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <button onClick={handleDelete}>deletar</button>
    </>
  );
}

export default DeleteTarefa;