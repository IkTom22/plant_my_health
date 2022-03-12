import React from "react"
import styled from "styled-components"
import Logo_svg from "../../assets/images/logo_3.svg"

const Logo_container = styled.div`
  height: 10rem;
  width: 10rem;
  background-color: var(--white);
  border-radius: 50%;
  border: var(--white) 10px solid;
  box-shadow: var(--shadow-2);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Logo = () => {
  return (
    <Logo_container>
      <div className="logo-letters logo-letters_plant">
        <span>P</span>
        <span>L</span>
        <span>A</span>
        <span>N</span>
        <span>T</span>
      </div>
      <div classnme="logo-letters_my">
        <span>M</span>
        <span>
          <Logo_svg />
        </span>
      </div>
      <div className="logo-letters logo-letters_health">
        <span>H</span>
        <span>E</span>
        <span>A</span>
        <span>L</span>
        <span>T</span>
        <span>H</span>
      </div>
    </Logo_container>
  )
}
