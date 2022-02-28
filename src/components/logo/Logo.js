import React from "react"
import styled from "styled-components"
import Logo_svg from "../../assets/images/logo_3.svg"

const Logo_container = styled.div`
  stroke: var(--black);
  height: 7rem;
  width: 7rem;
  background-color: var(--white);
  border-radius: 50%;
  border: var(--white) 10px solid;
`
export const Logo = () => {
  return (
    <Logo_container>
      <Logo_svg />
    </Logo_container>
  )
}
