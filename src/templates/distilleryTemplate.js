import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'


import Layout from '../components/Layout'
import Paper from '@material-ui/core/Paper'

const styles = theme => ({
	paper: {
		maxWidth: 1250,
		margin: 'auto',
		overflow: 'hidden',
	},
	block: {
		display: 'block',
	},
	contentWrapper: {
		margin: '40px 16px',
	},
	container: {
		padding: '48px 36px 0',
	},
})

 function DistilleryTemplate({ classes, data }) {
  
	 
	return (
		<Layout>
			<div className={classes.container}>
				<Paper className={classes.paper}>
					<div className={classes.contentWrapper}>
						<h1>{data.markdownRemark.frontmatter.name}</h1>
						<div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
					</div>
				</Paper>
			</div>
		</Layout>
	)
}

DistilleryTemplate.propTypes = {
	classes: PropTypes.object.isRequired,
}

export const distilleryQuery = graphql`
	query($slug: String!) {
		markdownRemark(fields: { slug: { eq: $slug } }) {
			frontmatter {
				name
				basicInfo {
					logo
					featuredImage
					labels
					spiritsCatagories
					dateFounded
					owner
					headDistiller
					status
				}
				contact {
					phone
					websiteURL
					email
					streetAddress
					suburb
					postCode
					state
					mapLocation
				}
				visiting {
					bar
					tastings
					tours
					tourPrice
					tourDesc
				}
				openingHours {
					monOpen
					monClose
					tueOpen
					tueClose
					wedOpen
					wedClose
					thurOpen
					thurClose
					friOpen
					friClose
					satOpen
					satClose
					sunOpen
					sunClose
				}
			}
			html
		}
	}
`

export default withStyles(styles)(DistilleryTemplate)