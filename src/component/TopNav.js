import logo  from '../assests/logo.png';
import React from 'react'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const TopNav = () => {

  return (
    <Navbar expand="md" className="topNav" id="nav-bar">
      <Container>
        <Navbar.Brand href="#">
          <img src={logo} alt=""/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#projects">Project</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link> 
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
  // return (

  //     <div id="nav-bar" class="topNav">
  //       <nav class="navbar navbar-expand-md bg-none">
  //           <div class="container">
  //             <a class="navbar-brand" href=""><img src="img/Group 1.png" alt=""/></a>
  //             <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  //               <span class="navbar-toggler-icon"></span>
  //             </button>
  //             <div class="collapse navbar-collapse" id="navbarSupportedContent">
  //               <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
  //                 <li class="nav-item">
  //                   <a class="nav-link active" aria-current="page" href="#skills">Skills</a>
  //                 </li>
  //                 <li class="nav-item">
  //                   <a class="nav-link" href="#projects">Projects</a>
  //                 </li>
  //                 <li class="nav-item">
  //                   <a class="nav-link active" aria-current="page" href="#about">About</a>
  //                 </li>
  //                 <li class="nav-item">
  //                   <a class="nav-link active" aria-current="page" href="#contact">Contacts</a>
  //                 </li>

  //               </ul>
  //             </div>
  //           </div>
  //         </nav>
  //   </div>
    
  // )
}

export default TopNav
