import React, { useState } from "react"
import { Link } from "gatsby"
import { FiAlignJustify } from "react-icons/fi"

const Navbar = () => {
  const [show, setShow] = useState(false)
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">Plant My Health</Link>
          <button className="nav-btn" onClick={() => setShow(!show)}>
            <FiAlignJustify />
          </button>
        </div>
        <div className={show ? "nav-links show-links" : "nav-links"}>
          <Link
            to="/"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setShow(false)}
          >
            home
          </Link>
          <Link
            to="/diseases"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setShow(false)}
          >
            diseases
          </Link>
          <Link
            to="/plants"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setShow(false)}
          >
            plants
          </Link>
          <Link
            to="/animal_products"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setShow(false)}
          >
            animal products
          </Link>
          <Link
            to="/tags"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setShow(false)}
          >
            tags
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
