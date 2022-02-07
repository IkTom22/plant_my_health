import React from "react"
import Disease from "./Disease"
import DiseaseCategory from "./DiseaseCategory"
import { useStaticQuery, graphql } from "gatsby"
import TagsList from "./TagsList"

// const getData = graphql`
//   {
//     diseases_list: allContentfulListsPage(
//       filter: { name: { eq: "Diseases" } }
//     ) {
//       diseases: nodes {
//         pages {
//           ... on ContentfulListPage {
//             id
//             diseaseName
//           }
//         }
//       }
//     }
//   }
// `
const AllDiseases = () => {
  //const data = useStaticQuery(getData)

  return (
    <div className="page">
      <h4>Pick a disease</h4>
      <TagsList />
    </div>
  )
}

export default AllDiseases
