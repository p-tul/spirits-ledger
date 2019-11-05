import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'


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
	uppercase: {
		textTransform: 'uppercase',
	}
})

 function DistilleryTemplate({ classes, data }) {
  
	 
	return (
		<Layout>
			<div className={classes.container}>
				<Paper className={classes.paper}>
					<div className={classes.contentWrapper}>
						{ data.markdownRemark.frontmatter.basicInfo.logo !== "" ? <img src={data.markdownRemark.frontmatter.basicInfo.logo}/> : <Typography variant="h1" align="center">{data.markdownRemark.frontmatter.name}</Typography> }
						<Typography variant="h6" className={classes.uppercase}>
							{data.markdownRemark.frontmatter.basicInfo.status}
						</Typography>
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
					status
				}
			}
			html
		}
	}
`

export default withStyles(styles)(DistilleryTemplate)