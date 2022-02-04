import React from "react"
import { graphql } from "gatsby"
const Testing = ({ data }) => {
  console.log(data)

  return <div>Testing</div>
}
export const data = graphql`
  {
    allContentfulDiseasePage {
      nodes {
        beneficial_plants {
          title
        }
        diseaseName
      }
    }
  }
`
export default Testing
