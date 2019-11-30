import React, { Component } from 'react'
import { graphql, staticQuery, Link, StaticQuery } from 'gatsby'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Divider from '@material-ui/core/Divider'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import LocalBarIcon from '@material-ui/icons/LocalBar'
import Grid from '@material-ui/core/Grid'
import Chip from '@material-ui/core/Chip'



export default () => (

	<StaticQuery
		query={graphql`
			query DistilleryQuery {
				allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/(distilleries)/" } }, sort: {fields: frontmatter___name, order: ASC}) {
					edges {
						node {
                            id
                            fields {
                                slug
                            }
							frontmatter {
								
								name
								basicInfo {
									spiritCategories
									dateFounded
                                    status
                                    labels
								}
                                contact {
                                    state
                                }
                                visiting {
                                    bar
                                    tastings
                                    tours
                                }
							}
						}
					}
				}
			}
		`}
		render={data => <List>{DistilleryListData(data)}</List>}
	/>
)

function DistilleryListData(data) {
	const distilleriesArray = []
    data.allMarkdownRemark.edges.forEach(item =>
		distilleriesArray.push(
			<>
				<ListItem button component={Link} to={item.node.fields.slug} key={item.node.id}>
                    <Grid container spacing={3}>
                        <Grid item>
                            <ListItemAvatar>
                                <Avatar alt="Placeholder">
                                    <LocalBarIcon />
                                </Avatar>
                            </ListItemAvatar>
                        </Grid>
                        <Grid item >
                            <ListItemText
                                primary={item.node.frontmatter.name}
                                secondary={
                                    <>
                                        {/* Labels */}
                                        {item.node.frontmatter.basicInfo.labels !== null ? <Typography variant="caption">Labels: {item.node.frontmatter.basicInfo.labels.map((item) => { return <span>{item}, </span> })}</Typography> : null}
                                        {/* Date Founded */}
                                        <Typography component="span" variant="caption">
                                            Founded: {item.node.frontmatter.basicInfo.dateFounded}
                                        </Typography>
                                        {/* Spirit Categories */}
                                        <Typography component="span" variant="caption">
                                            {item.node.frontmatter.basicInfo.spiritCategories.map((item) => { return <Chip size="small" label={item} color="primary" clickable="false" />})}
                                        </Typography>
                                        {/* State */}
                                        <Typography component="span" variant="caption">
                                            State: {item.node.frontmatter.contact.state}
                                        </Typography>
                                        {/* Status */}
                                        <Typography component="span" variant="caption">
                                            {item.node.frontmatter.basicInfo.status}
                                        </Typography>
                                    </>
                                }
                            />
                        </Grid>
                        <Grid item >
                            {item.node.frontmatter.visiting.bar == true ? <Typography comonent="span" variant="caption">Bar on Site</Typography> : null}
                            {item.node.frontmatter.visiting.tours == true ? <Typography comonent="span" variant="caption">Tours Available</Typography> : null}
                            {item.node.frontmatter.visiting.tastings == true ? <Typography comonent="span" variant="caption">Tastings Available</Typography> : null}
                        </Grid>
                    </Grid>
				</ListItem>
				<Divider variant="inset" component="li" />
			</>
		)
	)
	return distilleriesArray
}
