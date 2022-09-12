import axios from "axios";
import { useState, useEffect } from "react";

function PaginaUsuario() {

    const [form, setForm] = useState({
        nome: "",
        email: "",
        departamento: "",
        tarefas: [],
        projetos: [],
    });

    function handleChange(e) {
        setForm({...form, [e.target.name]: e.target.value});
    }

    async function handleSubmit(e) { 
        e.preventDefault();
        try {
        await axios.post("https://ironrest.herokuapp.com/85-wd-user", form);
            
        } catch (error) {
            console.log(error);
        }
    }


console.log(form)
    return (
        <div>
            
            <form onSubmit={handleSubmit}>
                <label>Nome</label>
                <input type="text" name="nome" placeholder="Nome" onChange={handleChange}/>

                <label>Email</label>
                <input type="email" name="email" placeholder="Email" onChange={handleChange}/>

                <label>Departamento</label>
                <input type="text" name="departamento" placeholder="Departamento" onChange={handleChange}/>

                <button type="submit">Salvar</button>
            </form>

        </div>
    )
}

export default PaginaUsuario