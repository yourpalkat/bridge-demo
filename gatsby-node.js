const { createFilePath } = require(`gatsby-source-filesystem`);
const path = require(`path`);

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `projects` });
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  // Note: the graphql function call returns a promise
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `);
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: `/projects${node.fields.slug}`,
      component: path.resolve(`./src/templates/projectPage.js`),
      context: {
        // Data passed to context is available in page queries as GraphQL variables
        slug: node.fields.slug,
      },
    });
  });
}