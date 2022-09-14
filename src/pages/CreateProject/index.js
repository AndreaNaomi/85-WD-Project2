import axios from "axios";
import { useState , useEffect } from "react";
import TelaTarefa from "../TelaTarefa";

function CreateProject() {
  const [projetos, setProjetos] = useState([]);
  const [loading, setLoading] = useState(false);
  const[criartarefa, setCriartarefa] = useState(false)

  const [form, setForm] = useState({
    id_p: 400,
    nomeprojeto: "",
    descprojeto: "",
    data: "",
    opcoesprioridades: "",
    statusProjeto: "",
    tarefas : [],
    usuarios : []
  });



  let projID = 400;
  loading &&
    projetos.forEach((element) => {
      if (element.id_p > projID) {
        projID = element.id_p;
      }
    });


    useEffect(() => {
      setLoading(false);
      async function fecthUsuario() {
        let response = await axios.get(
          "https://ironrest.herokuapp.com/85-wd-project"
        );
        setProjetos(response.data);
        setLoading(true);
      }
      fecthUsuario();
    }, [criartarefa]);
  


  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    form["id_p"] = projID + 1;
    try {
      await axios.post("https://ironrest.herokuapp.com/85-wd-project", form);
    } catch (error) {
      console.log(error);
    }
    setCriartarefa(!criartarefa)
  }



  return (
    <>
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
    

    {criartarefa&&(
      <TelaTarefa projID={projID} projetos={projetos} setProjetos={setProjetos}/>)}
    </>
  );
 

}

export default CreateProject;
