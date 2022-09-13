import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./style.module.css";

function UserPool({ listaUser, setListauser }) {
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(false);
    async function fecthUsuario() {
      let response = await axios.get(
        "https://ironrest.herokuapp.com/85-wd-user"
      );
      setUsuarios(response.data);
      setLoading(true);
    }
    fecthUsuario();
  }, []);
  function selectUser(id, nome) {
    setListauser([...listaUser, {id, nome}]); 
      
  }

  return (
    <>
      {loading && (
        <div className={styles.container}>
          {usuarios.map((element) => {
            return (
              <button onClick={() => selectUser(element.id_u, element.nome)}>
                <div className={styles.card}>
                  <div>FOTO AQUI</div>
                  <div>
                    <p>{element.nome}</p>
                    <p>{element.departamento}</p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      )}
    </>
  );
}

export default UserPool;
