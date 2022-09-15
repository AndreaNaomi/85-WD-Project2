import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import style from "./style.module.css";
import React from "react";
import { HomeOutlined } from "@ant-design/icons";



function HomePage() {
  const [projetos, setProjetos] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(false);
    async function fecthUsuario() {
      const response = await axios.get(
        "https://ironrest.herokuapp.com/85-wd-project"
      );
      setProjetos(response.data);
      setLoading(true);
    }
    fecthUsuario();
  }, []);

  console.log(projetos);
  return (
    <div className={style.divpai}>
  

      <Link to="/">
      <HomeOutlined />
      </Link>

      <div className={style.titulohome}>
        <h3 className={style.home}>Terça-feira, 13 de Setembro de 2022.</h3>
        <h2 className={style.bomdia}>Bom dia, Andrea!</h2>
      </div>

      <div style={{ padding: "20px" }}>
        <Link to="/CreateProject">
          <button>Criar Projeto</button>
        </Link>
      </div>

      <div className="card border-secondary mb-3">
        <div className="card-header"></div>
        <div className="card-body text-secondary"></div>
        <h5 className="card-title">Secondary card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </div>

      <div className={style.cardpai}>
        {loading &&
          projetos.map((element) => {
            return (
              <div key={element._id}>
                <div
                  className="card border-secondary mb-3"
                  style={{ maxWidth: "18rem" }}
                >
                  <div className="card-header">{element.nomeprojeto}</div>
                  <div className="card-body text-secondary">
                    <h5 className="card-title">{element.descprojeto}</h5>
                    <p className="card-text">{element.opcoesprioridades}</p>
                  </div>
                </div>

                {/* <div className={style.card}>
                  <p className={style.titulo}>{element.nomeprojeto}</p>
                  <p> {element.descprojeto} </p>
                  <p>{element.data}</p>   
                  <p>{element.opcoesprioridades}</p>
                  <p>{element.statusProjeto}</p>
                  <Link to={`/projetos/${element._id}`}>
                    <button>Detalhes</button>
                  </Link>
                </div> */}
              </div>
            );
          })}
      </div>
    </div>
  );
}
export default HomePage;
