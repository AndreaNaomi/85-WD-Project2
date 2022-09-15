import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import styles from "./style.module.css";
import TaskeEdit from "../../components/editarTarefa";

function DetalheTarefa() {
  const [showForm, setShowForm] = useState(false);
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
      <p>{tarefa.descrição}</p>
      <p>{tarefa.data}</p>
<h1>Usuarios</h1>
      {loading && (
        <div className={styles.container}>
          {listausers.map((element) => {
            return (
              <>
                <Link to={`/usuario/${element._id}`}>
                  <button>
                  <div class="card" style={{ width: "10rem" }}>
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
              </>
            );
          })}
        </div>
      )}
      <button onClick={() => setShowForm(!showForm)} className="btn btn-primary ">Editar Tarefa</button>

      {showForm === true &&     (
      <TaskeEdit tarefa={tarefa} setTarefa={setTarefa} id={id}  show={showForm} setShow={setShowForm}/>)}
    </>
  );
}

export default DetalheTarefa;
