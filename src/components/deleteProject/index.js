import axios from 'axios'


function DeleteProject({projeto}) {
     async function handleDelete() {
    
        try {
          await axios.delete(`https://ironrest.herokuapp.com/85-wd-project/${projeto._id}`);
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
export default DeleteProject;