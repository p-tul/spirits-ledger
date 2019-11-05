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
	const item = data.markdownRemark
	 
	return (
		<Layout>
			<div className={classes.container}>
				<Paper className={classes.paper}>
					<div className={classes.contentWrapper}>
						
						{/* Logo */}
						{ item.frontmatter.basicInfo.logo !== "" ? <img src={data.markdownRemark.frontmatter.basicInfo.logo}/> : <Typography variant="h1" align="center">{data.markdownRemark.frontmatter.name}</Typography> }
						
						{/* Featured Image */}
						{ item.frontmatter.basicInfo.featuredImage !== null ? <img src={item.frontmatter.basicInfo.featuredImage} /> : null}
						
						{/* Labels */}
						{item.frontmatter.basicInfo.labels !== null ? 
							<Typography variant="body2">
								Labels: {item.frontmatter.basicInfo.labels.map((item) => { return <span>{item}, </span> })}
							</Typography>
							: null
						}

						{/* Spirit Categories */}
						<Typography variant="body2" >
							{ item.frontmatter.basicInfo.spiritCategories.map((item) => { return <span>{item}, </span> })}
						</Typography>

						{/* Date Founded */}
						{item.frontmatter.basicInfo.dateFounded !== "" ? <Typography variant="body2" >{item.frontmatter.basicInfo.dateFounded}</Typography> : null}

						{/* Owner */}
						{item.frontmatter.basicInfo.owner !== "" ? <Typography variant="body2" >{item.frontmatter.basicInfo.owner}</Typography> : null}

						{/* Head Distiller */}
						{item.frontmatter.basicInfo.headDistiller !== "" ? <Typography variant="body2" >{item.frontmatter.basicInfo.headDistiller}</Typography> : null}

						
						{/* Status */}
						<Typography variant="h6" className={classes.uppercase}>
							{item.frontmatter.basicInfo.status}
						</Typography>

						

						<div dangerouslySetInnerHTML={{ __html: item.html }} />
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
					spiritCategories
					dateFounded
					owner
					headDistiller
					status
					
				}
			}
			html
		}
	}
`

export default withStyles(styles)(DistilleryTemplate)