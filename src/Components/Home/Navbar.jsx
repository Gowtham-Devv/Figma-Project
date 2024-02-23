import Nav from 'react-bootstrap/Nav';
import "../Home/Navbar.css"

function Navbar() {
  return (
    <Nav className='nav bgr'>
      <Nav.Item>
        <Nav.Link href="/about" active  className='text-dark navs'>About</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/Service" className='text-body-secondary navs' >Service</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/Solution"   className='text-body-secondary navs'>Solution</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/Industries"   className='text-body-secondary navs'>Industries</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/Technologices"    className='text-body-secondary navs'>Technologices</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/Protfolio"  className='text-body-secondary navs'>Protfolio</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/Blog"    className='text-body-secondary navs'>Blog</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/Contact"   className='text-body-secondary navs'>Contact</Nav.Link>
      </Nav.Item>

      
      
    </Nav>
  );
}

export default Navbar;