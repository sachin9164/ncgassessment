import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavBar() {
  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">NCG ERP Tool</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Dashboard</Nav.Link>
            <Nav.Link href="#features">Teams</Nav.Link>
            <Nav.Link href="#pricing">Confluence</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
