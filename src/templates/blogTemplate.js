import React from "react"
import { graphql } from "gatsby"

import Button from '../components/Button'
import NavBar from '../components/NavBar'
import Footer from "../components/Footer"
import Ribbon from "../components/Ribbon"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <>
        <NavBar />
        <Ribbon />
        <br />
        <div className="blog-post-container">
        <div className="blog-post">
            <h3>{frontmatter.title}</h3>
            <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
            />
        </div>
        <Button to="/blog">Go Back</Button>
        </div>
        <Footer />
    </>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`