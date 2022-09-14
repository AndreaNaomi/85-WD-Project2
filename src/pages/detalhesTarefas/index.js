import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import styles from "./style.module.css";
import TaskeEdit from "../../components/editarTarefa";
function DetalheTarefa() {
  const [loading, setLoading] = useState(false);
  const [usuarios, setUsuarios] = useState([]);
  const [tarefa, setTarefa] = useState([]);
  const { id } = useParams();
  const listausers = [];
  useEffect(() => {
    setLoading(false);
    async function fecthTarefa() {
      let response = await axios.get(
        `https://ironrest.herokuapp.com/85-wd-to-do/${id}`
      );
      setTarefa(response.data);
      setLoading(true);
    }
    fecthTarefa();
  }, []);

  useEffect(() => {
    async function fecthUsuario() {
      let response = await axios.get(
        `https://ironrest.herokuapp.com/85-wd-user`
      );
      setUsuarios(response.data);
    }
    fecthUsuario();
  }, []);

  loading &&
    tarefa.usuario.forEach((element) => {
      usuarios.forEach((usuario) => {
        if (usuario.id_u === element) {
          listausers.push(usuario);
        }
      });
    });

  console.log(listausers);

  return (
    <>
      <h1>{tarefa.tarefa}</h1>

      {loading && (
        <div className={styles.container}>
          {listausers.map((element) => {
            return (
              <>
                <Link to={`/usuario/${element._id}`}>
                  <button>
                    <div className={styles.card}>
                      <div>FOTO AQUI</div>
                      <div>
                        <p>{element.nome}</p>
                        <p>{element.departamento}</p>
                      </div>
                    </div>
                  </button>
                </Link>
              </>
            );
          })}
        </div>
      )}
      <TaskeEdit tarefa={tarefa} setTarefa={setTarefa} id={id}/>
    </>
  );
}

export default DetalheTarefa;
