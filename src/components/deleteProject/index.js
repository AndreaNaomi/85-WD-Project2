import axios from 'axios'
import {useNavigate } from 'react-router-dom'


function DeleteProject({projeto}) {
  const navigate = useNavigate();
     async function handleDelete() {
    
        try {
          await axios.delete(`https://ironrest.herokuapp.com/85-wd-project/${projeto._id}`);
        } catch (error) {
          console.log(error);
        }
        navigate("/home");
      }
    
      return (
        <>
          <button  className="btn btn-danger" onClick={handleDelete}>deletar</button>
        </>
      );
    }
export default DeleteProject;