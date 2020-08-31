import React from "react"
import { graphql } from "gatsby"

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Ribbon from "../components/Ribbon";
import Button from "../components/Button";

export default function Home({ data }) {
  const posts = data.allMarkdownRemark.edges;
  console.log(posts);
  return (
    <>
      <NavBar />
      <Ribbon />
      <div style={{textAlign: "center"}}>
        {posts.map((post, index) => (
          <div key={index} className="posts">
            <h3><b>{post.node.frontmatter.title}</b></h3>
            <p>{post.node.excerpt}</p>
            <Button to={post.node.frontmatter.slug}>Read More</Button>
          </div>
        ))}
        <Button to="/">Go Back</Button>
      </div>
      <Footer />
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