import React from "react"

import Button from "../components/Button"
import SubForm from "../components/SubForm"

export default function Home({ data }) {
  const {html} = data.allMarkdownRemark.nodes[0]
  return (
    <>
      <div className="me">
        <p>
          <b>Hello!</b> <span role="img" aria-label="hand">🖖</span>
        </p>
        <div dangerouslySetInnerHTML={{ __html: html }}></div>
      </div>
      <div style={{textAlign: "center"}}>
        <Button to="/blog">Browse Articles</Button>
      </div>
      <SubForm />
    </>
  )
}

export const query = graphql`
  {
    allMarkdownRemark(filter: {frontmatter: {slug: {eq: "/home"}}}) {
      nodes {
        html
        frontmatter {
          title
          slug
        }
      }
    }
  }
`