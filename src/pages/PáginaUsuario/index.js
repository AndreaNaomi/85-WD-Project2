import axios from "axios";
import { useState, useEffect } from "react";

function PaginaUsuario() {

    const[loading,setLoading] = useState('false')
    const[usuarios, setUsuarios] = useState([])

    const [form, setForm] = useState({
        id_u : "",
        nome: "",
        email: "",
        departamento: "",
        tarefas: [],
        projetos: [],
    });

    let userID = 210
 loading&&(
    usuarios.forEach(element => {
        if(element.id_u > userID){
            userID = element.id_u
        } 
    })
) 
   
    useEffect(()=>{
        setLoading(false)
        async function fecthUsuario(){
            let response =   await axios.get("https://ironrest.herokuapp.com/85-wd-user")
            setUsuarios(response.data)
            setLoading(true)
           }
           fecthUsuario() 

    },[])
        
    
    
    



   

async function handleSubmit(e) { 
    e.preventDefault()
    form['id_u'] = userID + 1

    try {
    await axios.post("https://ironrest.herokuapp.com/85-wd-user", form);
        
    } catch (error) {
        console.log(error)
    }
}
    function handleChange(e) {
                setForm({...form, [e.target.name]: e.target.value});

    }
  


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Nome</label>
        <input
          type="text"
          name="nome"
          placeholder="Nome"
          onChange={handleChange}
        />


        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />

        <label>Departamento</label>
        <input
          type="text"
          name="departamento"
          placeholder="Departamento"
          onChange={handleChange}
        />

        <button type="submit">Salvar</button>
      </form>
    </div>
  );
}

export default PaginaUsuario;
