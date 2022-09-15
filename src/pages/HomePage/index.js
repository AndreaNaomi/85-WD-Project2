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

  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

  
  console.log(projetos);
  return (
    <div className={style.divpai}>
  

      <Link to="/" className={style.homeout}>
      <HomeOutlined />
      </Link>

      <div className="App">
      <h2><b>Hoje, {date}.</b></h2>
      </div>
      {/* <div className={style.titulohome}> */}
      <div>
        <h2 className={style.bomdia}>Gestão de projetos</h2>
      </div>

      <div style={{ padding: "20px" }}>
        <Link to="/CreateProject">
          <button>Criar Projeto</button>
        </Link>
      </div>


      <div className={style.cardpai}>
        {loading &&
          projetos.map((element) => {
            return (
              <div key={element._id} id={style.cardP}>
             
                  <div className="card border-secondary mb-3" id={style.card2}>
                  <div className="card-header">{element.nomeprojeto}</div>
                  <div className="card-body text-secondary"></div>
                    <p className="card-title">{element.descprojeto}</p>
                    <p className="card-text">{element.data}</p>
                    <p className="card-body text-secondary">{element.opcoesprioridades}</p>
                    <p className="card-text">{element.statusProjeto}</p>
                  <Link to={`/projetos/${element._id}`}>
                    <button>Detalhes</button>
                  </Link>
                  </div>
                </div>
               
            )
          })}
          </div>
      </div>
  )
}
export default HomePage;
