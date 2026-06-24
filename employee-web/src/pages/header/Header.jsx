import React from 'react'
import { Container, Nav, Navbar, NavbarBrand } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import style from "./Header.module.css";

const Header = () => {

  
  return (
    <>
      <Navbar bg='primary' variant='dark' className={style.navbar}>
        <Container>
          <NavbarBrand to="/" className={style.navbar_brand}><strong> Employee Management System</strong></NavbarBrand>
          <Nav className='ml-auto'>
            <Nav.Link as={Link} to="/" className={style.nav_link}>Employees</Nav.Link>
            <Nav.Link as={Link} to="/employee" className={style.nav_link}>Post Employee</Nav.Link>
            
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Header;