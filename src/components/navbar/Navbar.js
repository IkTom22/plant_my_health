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

const Side_Navbar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" style={styles.navBar}>
      <Container
        className="d-flex flex-md-column justify-content-space-between pt-5"
        style={styles.holders}
      >
        <Navbar.Brand className="mx-auto">
          <Link to="/">
            <Logo />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav
            style={styles.iconsHolder}
            className="d-flex flex-md-column pt-3 pb-3"
          >
            <Nav.Item>
              <Link to="/diseases">
                <Icon_plate>
                  <Inner_plate>
                    <Diseases_svg style={styles.icons} />
                  </Inner_plate>
                </Icon_plate>
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/plants">
                <Icon_plate>
                  <Inner_plate>
                    <Plant_based_food style={(styles.plants, styles.icons)} />
                  </Inner_plate>
                </Icon_plate>
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/animal_products">
                <Icon_plate>
                  <Inner_plate>
                    <Animal_products style={styles.icons} />
                  </Inner_plate>
                </Icon_plate>
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/tags">
                <Icon_plate>
                  <Inner_plate>
                    <Tags style={styles.icons} />
                  </Inner_plate>
                </Icon_plate>
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/tags">
                <Icon_plate>
                  <Inner_plate>
                    <Donate style={styles.icons} />
                  </Inner_plate>
                </Icon_plate>
              </Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
const Icon_plate = styled.div`
  height: 6rem;
  width: 6rem;
  background-color: var(--white);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: var(--shadow-2);
`
const Inner_plate = styled.div`
  height: 4.7rem;
  width: 4.7rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: inset 0.2rem 0.2rem 0.5rem var(--grey-300);
`
export default Side_Navbar
