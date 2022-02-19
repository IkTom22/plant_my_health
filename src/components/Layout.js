import React from "react"
import "bootstrap/dist/css/bootstrap.css"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import Navbar from "./navbar/Navbar"
import Footer from "./footer/Footer"
import "normalize.css"
import "../assets/css/main.css"

const Layout = ({ children }) => {
  return (
    <>
      <Container fluid className="container m-0 p-0">
        <Row className="container d-flex flex-sm-column flex-md-row align-items-md-stretch m-0 p-0">
          <Col xs={12} md={1} className="m-0 p-0 nav_bar">
            <Navbar />
          </Col>
          <Col xs={12} md={11} className="page">
            {children}
          </Col>
        </Row>
      </Container>
    </>
  )
}
export default Layout
