const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const { fmImagesToRelative } = require("gatsby-remark-relative-images")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/Novica.js`)
  const result = await graphql(
    `
      {
        news: allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
                intro
                top
              }
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  // Create blog posts pages.
  const posts = result.data.news.edges

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node
    // const created_at = moment().format('YYYY-MM-DD');
    createPage({
      path: post.node.fields.slug,
      component: blogPost,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  fmImagesToRelative(node)
  if (node.frontmatter != undefined) {
    if (node.frontmatter.image1 == null || node.frontmatter.image1 == " ") {
      node.frontmatter.image1 = "../../static/assets/1.png"
    }
    if (node.frontmatter.image2 == null || node.frontmatter.image2 == " ") {
      node.frontmatter.image2 = "../../static/assets/1.png"
    }
    if (node.frontmatter.image3 == null || node.frontmatter.image3 == " ") {
      node.frontmatter.image3 = "../../static/assets/1.png"
    }
    if (node.frontmatter.image4 == null || node.frontmatter.image4 == " ") {
      node.frontmatter.image4 = "../../static/assets/1.png"
    }
    if (node.frontmatter.image5 == null || node.frontmatter.image5 == " ") {
      node.frontmatter.image5 = "../../static/assets/1.png"
    }
  }
  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })

    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type GraphCMS_Asset implements Node @dontInfer {
      image1: File  
    }
  `
  createTypes(typeDefs)
}

exports.createResolvers = ({
  actions,
  cache,
  createNodeId,
  createResolvers,
  store,
  reporter,
}) => {
  const { createNode } = actions

  createResolvers({
    GraphCMS_Asset: {
      image1: {
        type: `File`,
        resolve(source, args, context, info) {
          return createRemoteFileNode({
            url: source.url != null ? source.url : "",
            store,
            cache,
            createNode,
            createNodeId,
            reporter,
          })
        },
      },
    },
  })
}
