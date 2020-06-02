// exports.createPages = async function({actions, graphql}) {
//     const { data } = await graphql(`
//         query {
//             allMdx {
//                 edges {
//                   node {
//                     id
//                     frontmatter {
//                       slug
//                       date
//                       excerpt
//                     }
//                   }
//                 }
//               }

//         }
//     `)

//                 // allMdx(sort: {fields: frontmatter___date, order: DESC}) {
//             //     edges {
//             //       node {
//             //         frontmatter {
//             //           slug
//             //         }
//             //         id
//             //       }
//             //     }
//             //   }
// console.log(data)
//     // Create paginated pages for posts

//     const postPerPage = 3

//     const numPages = Math.ceil(data.allMdx.edges.length / postPerPage)


//     Array.from({ length: numPages}).forEach((_,i) =>{
//         actions.createPage({
//             path: i === 0 ? `/` : `/${i + 1}`,
//             component: require.resolve("./src/templates/allPosts.js"),
//             contex: {
//                 limit: postPerPage,
//                 skip: i * postPerPage,
//                 numPages,
//                 currentPage: i +1,
//             }
//         })
//     })


//     // Create single blog posts

//     data.allMdx.edges.forEach(edge => {
//         const slug = edge.node.frontmatter.slug
//         const id = edge.node.ide
//         actions.createPage({
//             path: slug,
//             component: require.resolve(`./src/templates/singlePost.js`),
//             context: {id},
//         })
//     })
// }

const path = require("path")

exports.createPages = async ({ graphql, actions, reporter }) => {
  // Destructure the createPage function from the actions object
  const { createPage } = actions

  const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            id
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
  }

      // Create paginated pages for posts

    const postPerPage = 3

    const numPages = Math.ceil(result.data.allMdx.edges.length / postPerPage)


    Array.from({ length: numPages}).forEach((_,i) =>{
        actions.createPage({
            path: i === 0 ? `/` : `/${i + 1}`,
            component: path.resolve("./src/templates/allPosts.js"),
            contex: {
                limit: postPerPage,
                skip: i * postPerPage,
                numPages,
                currentPage: i +1,
            }
        })
    })


  // Create blog post pages.
  const posts = result.data.allMdx.edges
  console.log(posts)
  // you'll call `createPage` for each result
  posts.forEach(({ node }, index) => {
    createPage({
      // This is the slug you created before
      // (or `node.frontmatter.slug`)
      path: node.frontmatter.slug,
      // This component will wrap our MDX content
      component: path.resolve(`./src/templates/singlePost.js`),
      // You can use the values in this context in
      // our page layout component
      context: { id: node.id },
    })
  })
}