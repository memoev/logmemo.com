import React from "react"
import { graphql } from "gatsby"

import Button from "../components/Button";
import SubForm from "../components/SubForm";

export default function Home({ data }) {
  const posts = data.allMarkdownRemark.edges;
  return (
    <>
      <div style={{textAlign: "center"}}>
        {posts.map((post, index) => (
          <div key={index} className="posts">
            <h3><b>{post.node.frontmatter.title}</b></h3>
            <p>{post.node.excerpt}</p>
            <Button to={post.node.frontmatter.slug}>Read More</Button>
          </div>
        ))}
        <Button className="last-button" to="/">Go Back</Button>
      </div>
      <SubForm />
    </>
  )
}

export const query = graphql`
  {
    allMarkdownRemark {
      edges {
        node {
          internal {
            description
          }
          frontmatter {
            title
            slug
          }
          excerpt(pruneLength: 400)
        }
      }
    }
  }
`