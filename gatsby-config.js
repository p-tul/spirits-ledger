module.exports = {
	siteMetadata: {
		title: `Spirits Ledger`,
		author: `Patrick Tully <patrick@spiritsledger.com.au>`,
		description: `Australian Spirits Directory`,
		siteUrl: `https://spiritsledger.com.au`
	},
	plugins: [
		{
			resolve: `gatsby-plugin-material-ui`,
		},
		`gatsby-plugin-netlify-cms`,
	],
}
