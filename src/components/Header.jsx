import { faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import  Navbar from 'react-bootstrap/Navbar'
import  Container  from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Badge from 'react-bootstrap/Badge'
import {Link} from 'react-router-dom'



function Header() {
  return (
    <Navbar expand="lg" className="bg-primary">
    <Container>
      <Link to={'/'} style={{textDecoration:'none'}}>
        <Navbar.Brand className='text-light'>
        <FontAwesomeIcon icon={faCartShopping} beat className='me-3'/>
        <b>E-cart</b></Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          
            <Nav.Link>
            <Link to={'/wishlist'}>
              <button className='btn btn-outline-light border rounded'>
              <FontAwesomeIcon icon={faHeart} style={{color: "#ff0000",}} className="me-2" />
              WishList
              <Badge bg="secondary" className='rounded ms-2'>5</Badge>
              </button>
              </Link>
            </Nav.Link>
       
       
            <Nav.Link>
            <Link to={'/cart'}>
              <button className='btn btn-outline-light border rounded'>
              <FontAwesomeIcon icon={faCartShopping} style={{color: "#FFD43B",}} className="me-2" />
              Cart
              <Badge bg="secondary" className='rounded ms-2'>5</Badge>
              </button>
              </Link>
            </Nav.Link>
     
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header