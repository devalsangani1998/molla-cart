import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BsCart2 } from "react-icons/bs";
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <Navbar bg="white" expand="lg" className='sticky-top shadow-sm py-3' style={{ zIndex: 1000 }} >
        <Container fluid>
          <Navbar.Brand to="#"><a href="/"><img src={require('./../components/assets/logo.png')} alt="" /></a></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll"/>
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '200px' }}
              navbarFixed
            >
              <Nav.Link to="/home">
                <Link className='nav px-3' to='/home'>HOME</Link></Nav.Link>
              <Nav.Link to="/product">
                <Link className='nav px-3' to='/product'> PRODUCT </Link>
              </Nav.Link>
              <Nav.Link to="/pages">
                <Link className='nav px-3' to='/about'> ABOUT </Link>
              </Nav.Link>
              <Nav.Link to="/blog">
                <Link className='nav px-3' to='/blog'>  BLOG </Link>
              </Nav.Link>
              <Nav.Link to="/element">
                <Link className='nav px-3' to='/contact'>CONTACT US</Link>
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search Product.."
                className="me-2"
                aria-label="Search"
              />
              <Button variant='0' className='me-4'>Search</Button>
            </Form>
            <div className="header-right">
              <div class="header-search header-search-extended header-search-visible header-search-no-radius d-xl-block">
              <div className="dropdown cart-dropdown">
            <Link className='cart' to="/cart">
              <BsCart2 />
            </Link>
          </div>
              </div>
            </div>
          </Navbar.Collapse>

        </Container>
      </Navbar>
    </>
  );
}

export default Header;