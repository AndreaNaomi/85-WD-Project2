import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import style from "./style.module.css";
import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

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
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;

  console.log(projetos);
  return (
    <div>
      <div className="App">
        <div class="p-5 mb-4 bg-light rounded-3">
          <div class="container-fluid py-5">
            <h1 class="display-5 fw-bold">Hoje, {date}</h1>
            <p class="col-md-8 fs-4">
              Gestão de projetos. Using a series of utilities, you can create
              this jumbotron, just like the one in previous versions of
              Bootstrap. Check out the examples below for how you can remix and
              restyle it to your liking.
            </p>
            <a
              href="/CreateProject"
              class="btn btn-primary btn-lg"
              type="button"
            >
              Criar Projeto
            </a>
          </div>
        </div>
        <Container></Container>
      </div>
      <Container>
        <Row>
          {loading &&
            projetos.map((element) => {
              return (
                <Col md="3">
                  <Card style={{ width: "18rem" }}>
                    <Card.Img
                      variant="top"
                      src="https://img.freepik.com/free-vector/business-man-working-hard-stock-financial-trade-market-diagram-vector-illustration-flat-design_1150-39773.jpg?w=2000"
                    />
                    <Card.Body>
                      <Card.Title>{element.nomeprojeto}</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item>Cras justo odio</ListGroup.Item>
                      <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                      <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                    </ListGroup>
                    <Card.Body>
                      <Card.Link href="#">Card Link</Card.Link>
                      <Card.Link href="#">Another Link</Card.Link>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
        </Row>
      </Container>

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
                  <p className="card-body text-secondary">
                    {element.opcoesprioridades}
                  </p>
                  <p className="card-text">{element.statusProjeto}</p>
                  <Link to={`/projetos/${element._id}`}>
                    <button>Detalhes</button>
                  </Link>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
export default HomePage;
