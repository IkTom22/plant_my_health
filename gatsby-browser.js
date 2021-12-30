const React = require("react")
const Layout = require("./src/components/Layout").default
//element represent a page
exports.wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}
