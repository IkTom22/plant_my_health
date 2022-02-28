import React from "react"
import styled from "styled-components"
import { Container } from "react-bootstrap"
import Col from "react-bootstrap/Col"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import { Link } from "gatsby"
import { Logo } from "../logo/Logo"
import Diseases_svg from "../../assets/images/diseases.svg"
import Plant_based_food from "../../assets/images/vegetables.svg"
import Animal_products from "../../assets/images/cow.svg"
import Tags from "../../assets/images/tags.svg"
import Donate from "../../assets/images/donate.svg"
import styles from "./navbar.styles"

const Icon_container = styled.div`
  height: 3rem;
  width: 3rem;
  background-color: var(--white);
  border-radius: 20%;
`
const Side_Navbar = () => {
  return (
    <Navbar collapseOnSelect expand="lg">
      <Container className="d-flex flex-md-column justify-content-space-between nav_bar_container">
        <Navbar.Brand className="mx-auto">
          <Link to="/">
            <Logo />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="flex-column">
            <Nav.Item>
              <Link to="/diseases">
                <Icon_container>
                  <Diseases_svg style={styles.icons} />
                </Icon_container>
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/plants">
                <Icon_container>
                  <Plant_based_food style={(styles.plants, styles.icons)} />
                </Icon_container>
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/animal_products">
                <Icon_container>
                  <Animal_products style={styles.icons} />
                </Icon_container>
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/tags">
                <Icon_container>
                  <Tags style={styles.icons} />
                </Icon_container>
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/tags">
                <Icon_container>
                  <Donate style={styles.icons} />
                </Icon_container>
              </Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Side_Navbar
