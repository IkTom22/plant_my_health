import React, { useState } from "react"
import styled from "styled-components"
import { Container } from "react-bootstrap"
import Col from "react-bootstrap/Col"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import { Link } from "gatsby"
import Logo_svg from "../../assets/images/logo.svg"

const Logo = styled.div`
  background-image: url("../images/logo.svg") no-repeat 0;
  stroke: var(--green);
`

const Side_Navbar = () => {
  // const [show, setShow] = useState(false)
  return (
    <Navbar collapseOnSelect expand="lg" className="side_bar">
      <Container fluid className="d-flex  flex-md-column">
        <Navbar.Brand>
          <Link to="/">
            <Logo>
              <Logo_svg />
            </Logo>
          </Link>
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
