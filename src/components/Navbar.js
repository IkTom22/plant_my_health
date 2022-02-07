import React, { useState } from "react"
import { Container } from "react-bootstrap"

import Col from "react-bootstrap/Col"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Button from "react-bootstrap/Button"
import { Link } from "gatsby"
import { FiAlignJustify } from "react-icons/fi"

const Side_Navbar = () => {
  // const [show, setShow] = useState(false)
  return (
    <Navbar collapseOnSelect bg="light" expand="lg" className="side_bar">
      <Container fluid className="d-flex  flex-md-column">
        <Navbar.Brand>
          <Link to="/">Plant My Health</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="flex-column">
            <Nav.Item>
              <Link to="/">home</Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/diseases">diseases</Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/plants">plants</Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/animal_products">animal products</Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/tags">tags</Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Side_Navbar
