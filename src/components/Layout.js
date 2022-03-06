import React from "react"
import "bootstrap/dist/css/bootstrap.css"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import Navbar from "./navbar/Navbar"
import Footer from "./footer/Footer"
import "normalize.css"
import "../assets/css/main.css"
import { Stack } from "react-bootstrap"

const Layout = ({ children }) => {
  return (
    <>
      <Container
        fluid
        className="flex d-flex flex-sm-column flex-md-row m-0 p-0 app_container"
      >
        <Row className="flex d-flex  flex-md-column align-items-md-stretch m-0 p-0  side_bar">
          <Col className="nav_bar p-0">
            <Navbar />
          </Col>
          <Col className="p-0 footer">
            <Footer />
          </Col>
        </Row>
        <Row className="page m-0">{children}</Row>
      </Container>
    </>
  )
}
export default Layout
