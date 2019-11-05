const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')


exports.onCreateNode = ({node, getNode, actions }) => {
	const { createNodeField } = actions 
	if (node.internal.type === 'MarkdownRemark') {
		const slug = createFilePath({ node, getNode, basePath: `src/pages` })
		createNodeField({
			node,
			name: `slug`,
			value: slug,
		})
	}
}

// DISTILLERIES
exports.createPages = async ({ actions, graphql, reporter }) => {
	const { createPage } = actions
	const distilleryDetailTemplate = path.resolve(`./src/templates/distilleryTemplate.js`)
	const result = await graphql(`
		{
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
	`)
	// Handle errors
	if (result.errors) {
		reporter.panicOnBuild(`Error while running GraphQL query.`)
		return
	}
	result.data.allMarkdownRemark.edges.forEach(({ node }) => {
		createPage({
			path: node.fields.slug,
			component: distilleryDetailTemplate,
			context: {
				slug: node.fields.slug
			},
		})
	})
}


// SPIRITS
// exports.createPages = async ({ actions, graphql, reporter }) => {
// 	const { createPage } = actions
// 	const spiritDetailTemplate = path.resolve(`src/templates/spiritTemplate.js`)
// 	const result = await graphql(`
// 		{
// 			allMarkdownRemark {
// 				edges {
// 					node {
// 						frontmatter {
// 							path
// 						}
// 					}
// 				}
// 			}
// 		}
// 	`)
// 	// Handle errors
// 	if (result.errors) {
// 		reporter.panicOnBuild(`Error while running GraphQL query.`)
// 		return
// 	}
// 	result.data.allMarkdownRemark.edges.forEach(({ node }) => {
// 		createPage({
// 			path: node.frontmatter.path,
// 			component: spiritDetailTemplate,
// 			context: {}, // additional data can be passed via context
// 		})
// 	})
// }



// COCKTAILS
// exports.createPages = async ({ actions, graphql, reporter }) => {
// 	const { createPage } = actions
// 	const cocktailDetailTemplate = path.resolve(`src/templates/cocktailTemplate.js`)
// 	const result = await graphql(`
// 		{
// 			allMarkdownRemark {
// 				edges {
// 					node {
// 						frontmatter {
// 							path
// 						}
// 					}
// 				}
// 			}
// 		}
// 	`)
// 	// Handle errors
// 	if (result.errors) {
// 		reporter.panicOnBuild(`Error while running GraphQL query.`)
// 		return
// 	}
// 	result.data.allMarkdownRemark.edges.forEach(({ node }) => {
// 		createPage({
// 			path: node.frontmatter.path,
// 			component: cocktailDetailTemplate,
// 			context: {}, // additional data can be passed via context
// 		})
// 	})
// }



// NEWS
// exports.createPages = async ({ actions, graphql, reporter }) => {
// 	const { createPage } = actions
// 	const newsArticleTemplate = path.resolve(`src/templates/articleTemplate.js`)
// 	const result = await graphql(`
// 		{
// 			allMarkdownRemark {
// 				edges {
// 					node {
// 						frontmatter {
// 							path
// 						}
// 					}
// 				}
// 			}
// 		}
// 	`)
// 	// Handle errors
// 	if (result.errors) {
// 		reporter.panicOnBuild(`Error while running GraphQL query.`)
// 		return
// 	}
// 	result.data.allMarkdownRemark.edges.forEach(({ node }) => {
// 		createPage({
// 			path: node.frontmatter.path,
// 			component: newsArticleTemplate,
// 			context: {}, // additional data can be passed via context
// 		})
// 	})
// }



// EVENTS
// exports.createPages = async ({ actions, graphql, reporter }) => {
// 	const { createPage } = actions
// 	const eventDetailTemplate = path.resolve(`src/templates/eventTemplate.js`)
// 	const result = await graphql(`
// 		{
// 			allMarkdownRemark {
// 				edges {
// 					node {
// 						frontmatter {
// 							path
// 						}
// 					}
// 				}
// 			}
// 		}
// 	`)
// 	// Handle errors
// 	if (result.errors) {
// 		reporter.panicOnBuild(`Error while running GraphQL query.`)
// 		return
// 	}
// 	result.data.allMarkdownRemark.edges.forEach(({ node }) => {
// 		createPage({
// 			path: node.frontmatter.path,
// 			component: eventDetailTemplate,
// 			context: {}, // additional data can be passed via context
// 		})
// 	})
// }



exports.onCreateWebpackConfig = ({ actions, stage }) => {
	// enable sourcemaps on dev
	// https: //github.com/gatsbyjs/gatsby/issues/6278
	if (stage === 'develop') {
		actions.setWebpackConfig({
			devtool: 'cheap-module-source-map',
		})
	}

	actions.setWebpackConfig({
		resolve: {
			modules: [path.join(__dirname, 'src'), 'node_modules'],
			alias: {
				'~components': path.resolve(__dirname, 'src/components'),
				'~utils': path.resolve(__dirname, 'src/utils'),
			},
		},
	})
}
