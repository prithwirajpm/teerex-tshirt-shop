import { Badge } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Pshop from '../Asset/pshope.png'

function Header() {
  const wishlist = useSelector((state)=>state.wishlistReducer)
  const cart = useSelector((state)=>state.cartReducer)
  return (
    <Navbar expand="lg" className="fixed" style={{backgroundColor:'rgba(224, 224, 224, 1)'}}>
      <Container>
        <Navbar.Brand> <Link to={'/'} className='d-flex align-items-center' style={{textDecoration:'none',color:'090979',fontw
            :'bold'}}><img src={Pshop} alt="" srcset="" width='100px' /><b></b></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className='btn border rounded' style={{backgroundColor:'white'}}>
                <Link to={'/wishlist'} className='d-flex align-items-center' style={{textDecoration:'none',color:'black',fontw
            :'bold'}}>
                <i className='fa-solid fa-heart me-2'  style={{color:'black'}}></i>WishList
                <Badge className='ms-2 rounded' bg='black'>{wishlist.length}</Badge></Link>
            
            </Nav.Link>
            <Nav.Link className='btn btn border rounded ms-2'style={{backgroundColor:'white'}}>
                <Link to={'/cart'} className='d-flex align-items-center' style={{textDecoration:'none',color:'black',fontw
            :'bold'}}>
                <i className='fa-solid fa-cart-shopping me-2' style={{color:'#090979'}}></i>Cart
                <Badge className='ms-2 rounded' bg='black'>{cart.length}</Badge></Link>
            
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;