import { Navbar, Nav } from "react-bootstrap";
import styles from "../styles/Home.module.css";

export default function App() {
  return <MyNav />;
}

function MyNav() {
  return (
    <Navbar bg="light" expand="lg" className={styles.nav}>
      <Navbar.Brand href="#home">Shayp-Assessment</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto" class="topnav-centered">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/cryptos">Top 20</Nav.Link>
          <Nav.Link href="/converter">Converter</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
