import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavbarMain = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">Clean It Up</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0 nav" style={{ maxHeight: '100px' }} navbarScroll>
              <Nav.Link className="nav-link" href="/">
                Home
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link className="nav-link" href="/Profile">
                Profile
              </Nav.Link>
              <Nav.Link className="nav-link" href="/about">
                Logout
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarMain;
