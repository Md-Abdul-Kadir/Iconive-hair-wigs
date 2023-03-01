import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from'../Images/logoblack.png'
import './Navigation.css'
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PersonIcon from '@mui/icons-material/Person';
import LocalMallIcon from '@mui/icons-material/LocalMall';


export default function Navigation() {
  return (
    <div>
      {/* offer div */}
      <div className="bg-theme-blue py-1 d-flex"><p className="mx-auto py-2 . my-auto text-light text-xs">FREE INTERNATIONAL SHIPPING On Orders Over $200!</p></div>
      {/* login div */}
      <div className="d-flex">
        <div className="d-flex ms-auto me-4">
         
       <div className="p-1  ">
        <FavoriteBorderIcon className="text-black"/>
       </div>
       <div className="p-1 ">
        <PersonIcon className="text-black"/>
       </div>
       <div className="p-1 ">
        <LocalMallIcon className="text-black"/>
       </div>
      </div>
      </div>
      {/* title div */}
      <div className="d-flex justify-between">
      <div className="ms-5 w-25 text-start">   
        <img className="me-auto -mt" wiidt="50px" height="100px" src={logo} alt="this is a logo"/>
      </div>
      <div className="w-50 d-flex">
      <h1 className="fw-bold mb-auto mx-auto w-50">
        ICONIVE
      </h1>
      </div>
      
      <div className="w-25 d-flex py-4 justify-end">
      <div class="d-flex border rounded-3 ms-auto">
          <input class="border-0 my-auto  me-2 py-1" type="search" placeholder=" Search wigs" aria-label="Search"/>
          <SearchIcon className="text-black me-2 my-auto"/>
      </div>
      <div className="my-auto me-4 h-100">
        <button className="btn h-100 ms-2 btn-warning px-3 py-1 rounded-3 text-light my-auto">Wholesale</button>
      </div>
      </div>
      
      </div>
      <Navbar bg="light" expand="lg py-0">
        <Container className="h-100">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto gap-4 d-flex mx-auto">
              <Nav.Link href="#home" className="text-black">Hairstyle</Nav.Link>
              <NavDropdown title="Category" id="basic-nav-dropdown" className="text-black">
                <NavDropdown.Item href="#action/3.1" className="text-black">wigs</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#home" className="text-black">Customization</Nav.Link>
              <Nav.Link href="#home" className="text-black"> Help me to chose</Nav.Link>
              <Nav.Link href="#home" className="text-black">Offers</Nav.Link>
              <Nav.Link href="#home" className="text-black">Offers</Nav.Link>
              <Nav.Link href="#home" className="text-black">Services & Repair</Nav.Link>
              <Nav.Link href="#home" className="text-black">Join Us</Nav.Link>
              <Nav.Link href="#home" className="text-black">Guide</Nav.Link>
        
             
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
