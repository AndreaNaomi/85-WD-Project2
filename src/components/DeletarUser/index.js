import {useState, useEffect} from 'react'
import axios from 'axios'

function DeleteUser({usuario, setUsuario, id, listatarefa}) {
    const[tarefas, setTarefas] = useState([])
    const [tarefaUser, setTarefaUsers] = useState(usuario.tarefas)
    const [loading, setLoading] = useState(false)
    
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
    
      loading&&
      listatarefa.map((tarelement)=>{
        
        tarefas.map((element)=>{
            if(element.id_t === tarelement.id_t){
                console.log('mach')
            }
        })
      })
       

    return ( 

        <>
        <h1>deletar</h1>
        </>
     );
}

export default DeleteUser;