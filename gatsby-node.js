const path = require('path')

// DISTILLERIES
exports.createPages = async ({ actions, graphql, reporter }) => {
	const { createPage } = actions
	const distilleryDetailTemplate = path.resolve(`src/templates/distilleryTemplate.js`)
	const result = await graphql(`
		{
			allMarkdownRemark {
				edges {
					node {
						frontmatter {
							path
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
			path: node.frontmatter.path,
			component: distilleryDetailTemplate,
			context: {}, // additional data can be passed via context
		})
	})
}



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
