import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./style.module.css";
import { Link } from "react-router-dom";

function UserPool2({ clicou }) {
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
  }, [clicou]);

  return (
    <>
      {loading && (
        <div className={styles.container}>
          {usuarios.map((element) => {
            return (
              <Link to={`/usuario/${element._id}`}>
                <button>
                  <div class="card" style={{ width: "18rem" }}>
                    <img
                      src="https://www.seekpng.com/png/detail/966-9665493_my-profile-icon-blank-profile-image-circle.png"
                      class="card-img-top"
                      alt="..."
                    />
                    <div class="card-body">
                      <h5 class="card-title">{element.nome}</h5>
                      <p class="card-text">{element.departamento}</p>
                    </div>
                  </div>
                </button>
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
}

export default UserPool2;
