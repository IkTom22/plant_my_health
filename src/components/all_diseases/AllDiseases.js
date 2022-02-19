import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import TagsList from "../tags_list/TagsList"

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
