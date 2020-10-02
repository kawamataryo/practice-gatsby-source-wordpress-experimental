const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      allWpPost(sort: {fields: [date], order: DESC}) {
        nodes {
          title
          excerpt
          content
          slug
          date
        }
      }
    }
  `).then(result => {
    //highlight-start
    result.data.allWpPost.nodes.forEach((node) => {
      createPage({
        path: decodeURI(node.slug),
        component: path.resolve(`./src/templates/blog-post.tsx`),
        context: {
          // This is the $slug variable
          // passed to blog-post.js
          slug: node.slug,
        },
      })
    })
    //highlight-end
  })
}
