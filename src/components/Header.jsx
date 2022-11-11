import PropTypes  from "prop-types";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { title, description } from "../assets/texts";
import image from '../assets/images/dog-navbar.png';
import dogFace from '../assets/images/dog-face.png'

export const Header = () => {
  return (
    <Navbar>
      <Container >
        <Navbar.Brand >
          <h1 className="redLetter">{title.TITLE}<img src={image} alt='little dog' /></h1>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <p className="redLetter">{description.INTRO_DESCRIPTION}<img src={dogFace} alt="dog face" /></p>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

Header.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    className: PropTypes.string,
    image: PropTypes.string,
};

Header.defaultProps = {
  title: 'DOGS',
  description: '',
  className: '',
}
