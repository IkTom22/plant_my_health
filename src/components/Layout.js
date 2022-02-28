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
      <Container fluid className="container m-0 p-0">
        <Row className="container flex d-flex flex-sm-column flex-md-row align-items-md-stretch m-0 p-0">
          <Col
            xs={12}
            md={2}
            className="m-0 p-0 d-flex flex-md-column side_bar "
          >
            <Navbar />
            <Footer />
          </Col>
          <Col xs={12} md={10} className="page">
            {children}
          </Col>
        </Row>
      </Container>
    </>
  )
}
export default Layout
