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
		{
			resolve: `gatsby-source-filesystem`,
			options: {
			  name: `distillery-data`,
			  path: `${__dirname}/distilleries`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
			  name: `spirit-data`,
			  path: `${__dirname}/spirits`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
			  name: `event-data`,
			  path: `${__dirname}/events`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
			  name: `news-data`,
			  path: `${__dirname}/news`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
			  name: `cocktail-data`,
			  path: `${__dirname}/cocktails`,
			},
		},
		`gatsby-transformer-remark`,
	],
}
