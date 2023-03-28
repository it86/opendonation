"use client";

import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const NavigationBar = () => {
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="/">opendonation</Navbar.Brand>
        <Nav>
          <Nav.Link href="/donor">Spender</Nav.Link>
          <Nav.Link href="/donation">Spenden</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
