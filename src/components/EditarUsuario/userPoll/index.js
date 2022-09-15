import { useEffect, useState } from "react";
import axios from "axios";

import { Link } from "react-router-dom";

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
    setListauser([...listaUser, { id, nome }]);
  }

  return (
    <>
      <table class="table table-hover">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Setor</th>
          </tr>
        </thead>
        <tbody>
          {loading &&
            usuarios.map((element) => {
              return (
                <>
                  <tr>
                    <td>
                      <Link to={`/usuario/${element._id}`}>
                        <p>{element.nome}</p>
                      </Link>
                    </td>
                    <td>
                      <p>{element.departamento} </p>
                    </td>

                    <td>
                      <button
                        className="btn btn-primary btn-sm"
                        onClick={() => selectUser(element.id_u, element.nome)}
                      >
                        Adicinar
                      </button>
                    </td>
                  </tr>
                </>
              );
            })}
        </tbody>
      </table>
    </>
  );
}

export default UserPool;
