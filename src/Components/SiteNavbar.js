import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function SiteNavbar() {
  return (
    <>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand>Jignesh Lad's Portfolio</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default SiteNavbar;
