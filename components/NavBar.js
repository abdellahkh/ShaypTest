import { Navbar, Nav } from "react-bootstrap";

export default function App() {
  return <MyNav />;
}

function MyNav() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Shayp-Assessment</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/cryptos">Top 20</Nav.Link>
          <Nav.Link href="/converter">Converter</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
