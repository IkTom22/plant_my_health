import React from "react"
import styled from "styled-components"
import Logo_svg from "../../assets/images/logo_3.svg"

const Logo_container = styled.div`
  stroke: var(--black);
  height: 9rem;
  width: 9rem;
  background-color: var(--white);
  border-radius: 50%;
  border: var(--white) 10px solid;
  box-shadow: var(--shadow-2);
`
export const Logo = () => {
  return (
    <Logo_container className="d-flex flex-column justify-content-center align-items-center">
      <Logo_svg />
      <div className="logo_letters">
        <span>P</span>
        <span>l</span>
        <span>a</span>
        <span>n</span>
        <span>t</span>
        <span></span>
        <span>M</span>
        <span>y</span>
        <span></span>
        <span>H</span>
        <span>e</span>
        <span>a</span>
        <span>l</span>
        <span>t</span>
        <span>
          <h3></h3>
        </span>
      </div>
    </Logo_container>
  )
}
