import React from "react"
import { graphql } from "gatsby"
import Header from "../components/header"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <React.Fragment>
      <Header />
      <div className="row">
        <div className="col-md-6 project__img-container">
          <img
            className="project__img img-fluid"
            src={frontmatter.img}
            alt="cover"
          ></img>
        </div>
        <div className="col-md-6 project__content">
          <h1 className="project__title">{frontmatter.title}</h1>
          {/* <h2 className="project__date">{frontmatter.date}</h2> */}
          <div
            className="project__content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
          <div className="btn__container">
            <a href={frontmatter.link} className="btn project__btn">
              Demo
            </a>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        img
        link
      }
    }
  }
`
