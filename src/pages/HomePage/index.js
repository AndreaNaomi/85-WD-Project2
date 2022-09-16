import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// import React from "react";
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
        <div className="p-5 mb-4 bg-light rounded-3">
          <div className="container-fluid py-5">
            <h1 className="display-5 fw-bold">Hoje, {date}</h1>
            <p className="col-md-8 fs-4">
            Task Daily, é uma plataforma de gerenciamento de trabalho móvel e 
            web desenvolvida para ajudar as equipes a organizar, acompanhar e gerenciar seu trabalho.
            </p>
            <a
              href="/CreateProject"
              className="btn btn-primary btn-lg"
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
                <Col md="4">
                  <Card style={{ width: "18rem" }}>
                    <Card.Img
                      variant="top"
                      src="https://img.freepik.com/free-vector/business-man-working-hard-stock-financial-trade-market-diagram-vector-illustration-flat-design_1150-39773.jpg?w=2000"
                    />
                    <Card.Body>
                      <Card.Title>{element.nomeprojeto}</Card.Title>
                      <Card.Text>
                      {element.descprojeto}
                      </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item>{element.data}</ListGroup.Item>
                      <ListGroup.Item>{element.statusProjeto}</ListGroup.Item>
                      <ListGroup.Item>{element.opcoesprioridades}</ListGroup.Item>
                    </ListGroup>
                    <Card.Body>
                      <Link to={`/projetos/${element._id}`}>Detalhe</Link>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
        </Row>
      </Container>
    
    </div>
  );
}

export default HomePage;
