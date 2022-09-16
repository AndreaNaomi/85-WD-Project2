
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { HomeOutlined } from "@ant-design/icons";

function NavBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            Task it{" "}
            <small className="text-muted">
              {" "}
              &nbsp;&nbsp; - Daily Management
            </small>
          </Navbar.Brand>
          <Nav className="justify-content-end">
            <Nav.Link href="/">
              <HomeOutlined /> Home
            </Nav.Link>
            <Nav.Link href="/PaginaUsuario">+ Add Users</Nav.Link>
            <Nav.Link href="#pricing">About Us</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
