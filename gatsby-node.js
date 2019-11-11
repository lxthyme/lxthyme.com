const path = require("path")
exports.createPages = ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve("src/templates/blogTemplate.js")
  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `).then(result => {
    console.log("-->RESULT: ", result)
    if (result.errors) {
      reporter.panicOnBuild(`Error while running GraphQL query.
          --------------------ERROR----------
          ERROR: ${result.errors}
          --------------------END----------
          `)
      return Promise.reject(result.errors)
    }

    return result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: blogPostTemplate,
        context: {},
      })
    })
  })
}
