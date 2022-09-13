import axios from "axios";
import { useState } from "react"


function TelaTarefa() {

    const [form, setForm] = useState({
        tarefa: "",
        descrição: "",
        responsavel: "",
    });

    function handleChange(e) {
        setForm({...form, [e.target.name]: e.target.value});
    }

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            await axios.post("https://ironrest.herokuapp.com/85-wd-to-do", form)
        } catch (error) {
            console.log(error)
        }
    }

    console.log(form)
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>Nome da Tarefa</label>
            <input type="text" name="tarefa" placeholder="Nome da tarefa" onChange={handleChange}/>

            <label>Descrição da Tarefa</label>
            <input type="text" name="descrição" placeholder="Descrição da Tarefa" onChange={handleChange}/>

            <label>Atribuir Tarefa</label>
            <input
            type="text"
            name="responsavel"
            placeholder="Atribuir tarefa para" onChange={handleChange}/>

            <button type="submit">Salvar</button>
         </form>
    </div>
  );
}

export default TelaTarefa;
