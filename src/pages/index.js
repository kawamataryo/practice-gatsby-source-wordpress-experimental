import React from "react"
import { Link, graphql } from "gatsby" //highlight-line
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from 'gatsby-image'

export default function Home({ data }) {
  return (
    <Layout>
      <SEO title="home" />
      <h1>My WordPress Blog</h1>
      <h4>Posts</h4>
      {data.allWpPost.nodes.map((node) => (
        <div key={node.slug}>
          {/* highlight-start */}
          <Link to={node.slug}>
            <p>{node.title}</p>
          </Link>
          {/* highlight-end */}
          <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
          {
            node.featuredImage ?
            <Img
              fixed={node.featuredImage.node.localFile.childImageSharp.fixed}/>
              :
              ''
          }
        </div>
      ))}
    </Layout>
  )
}

export const pageQuery = graphql`
    query {
        allWpPost(sort: { fields: [date] }) {
            nodes {
                title
                excerpt
                slug
                featuredImage {
                    node {
                        localFile {
                            childImageSharp {
                                fixed(height: 300, width: 300) {
                                    src
                                    height
                                    width
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`
