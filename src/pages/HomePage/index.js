import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import style from "./style.module.css";
import React from "react";

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
  return (
    <>
      <div>
        <nav className="navbar shadow-md rounded-bottom"></nav>
        <div>
          <div className="home-Page">
            <h3 className={style.home}>Terça-feira, 13 de Setembro de 2022.</h3>
            <h2 className={style.bomdia}>Bom dia, Andrea!</h2>
          </div>
        </div>

        <table style={{ margin: "20px" }}>
          <thead>
            <tr>
              <th style={{ padding: "20px" }}>Nome</th>
              <th style={{ padding: "20px" }}>Descrição</th>
              <th style={{ padding: "20px" }}>Dead Line</th>
              <th style={{ padding: "20px" }}>Prioridade</th>
              <th style={{ padding: "20px" }}>Status</th>

              <th style={{ padding: "20px" }}>
                <Link to="/CreateProject">
                  <button>Criar Projeto</button>
                </Link>
              </th>
            </tr>
          </thead>
          <tbody>
            {loading &&
              projetos.map((element) => {
                return (
                  <>
                    {/*  <div className={style.card}>
                    <p className={style.titulo}>{element.nomeprojeto}</p>
                    <p > {element.descprojeto} </p>
                    <p>{element.data}</p>
                    <p>{element.opcoesprioridades}</p>
                    <p>{element.statusProjeto}</p>
                    <Link to={`/projetos/${element._id}`}>
                      <button>Detalhes</button>
                    </Link>
                    </div>
                  </>
 */}
                    <tr>
                      <td style={{ padding: "20px" }}>
                        <p>{element.nomeprojeto}</p>
                      </td>
                      <td style={{ padding: "20px" }}>
                        <p>{element.descprojeto} </p>
                      </td>
                      <td style={{ padding: "20px" }}>{element.data}</td>
                      <td style={{ padding: "20px" }}>
                        {element.opcoesprioridades}
                      </td>
                      <td style={{ padding: "20px" }}>
                        <p>{element.statusProjeto}</p>
                      </td>
                      <td style={{ padding: "20px" }}>
                        <Link to={`/projetos/${element._id}`}>
                          <button>Detalhes</button>
                        </Link>
                      </td>
                    </tr>
                  </>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
}
export default HomePage;
