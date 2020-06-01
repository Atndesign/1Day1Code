import React from "react"
import Header from "../components/header"
import ThumbnailProject from "../components/project-thumbnail"
let dir = "https://atndesign.github.io/dailycode"

export default ({ data }) => (
  <React.Fragment>
    <Header />
    <div className="row">
      {data.allMarkdownRemark.edges.map(project => (
        <div className="col-lg-3 col-md-4">
          <ThumbnailProject
            cover={dir + project.node.frontmatter.img}
            title={project.node.frontmatter.title}
            path={dir + project.node.frontmatter.path}
          />
        </div>
      ))}
    </div>
  </React.Fragment>
)
export const postQuery = graphql`
  query indexQuery {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            img
            link
            title
            path
            date
          }
        }
      }
    }
  }
`
