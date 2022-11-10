import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { title, description } from "../assets/texts";
import image from '../assets/images/dog-navbar.png'

export const Header = () => {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand>
          <h1>{title.TITLE} <img src={image} alt='little dog' /></h1>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <h3>{description.INTRO_DESCRIPTION}</h3>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
