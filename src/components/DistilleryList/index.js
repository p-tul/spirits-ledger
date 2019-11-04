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


export default () => (

	<StaticQuery
		query={graphql`
			query DistilleryQuery {
				allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/(distilleries)/" } }) {
					edges {
						node {
							id
							frontmatter {
								path
								name
								basicInfo {
									spiritCatagories
									dateFounded(formatString: "MMM, YYYY")
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
				<ListItem button component={Link} to={item.node.frontmatter.path} key={item.node.id}>
                    <Grid container spacing={3}>
                        <Grid item>
                            <ListItemAvatar>
                                <Avatar alt="Remy Sharp">
                                    <LocalBarIcon />
                                </Avatar>
                            </ListItemAvatar>
                        </Grid>
                        <Grid item >
                            <ListItemText
                                primary={item.node.frontmatter.name}
                                secondary={
                                    <>
                                        {item.node.frontmatter.basicInfo.labels !== null ? <Typography>Labels: {item.node.frontmatter.basicInfo.labels.map((item) => { return <span>{item}, </span> })}</Typography> : null}
                                        <Typography component="span" variant="body2">
                                            Founded: {item.node.frontmatter.basicInfo.dateFounded}
                                        </Typography>
                                        <Typography component="span" variant="body2">
                                            Categories: {item.node.frontmatter.basicInfo.spiritCatagories.map((item) => { return <span>{item}, </span>})}
                                            
                                        </Typography>
                                        <Typography component="span" variant="body2">
                                            State: {item.node.frontmatter.contact.state}
                                        </Typography>
                                        <Typography component="span" variant="body2">
                                            {item.node.frontmatter.basicInfo.status}
                                        </Typography>
                                    </>
                                }
                            />
                        </Grid>
                        <Grid item >
                            {item.node.frontmatter.visiting.bar == true ? <Typography comonent="span" variant="body2">Bar on Site</Typography> : null}
                            {item.node.frontmatter.visiting.tours == true ? <Typography comonent="span" variant="body2">Tours Available</Typography> : null}
                            {item.node.frontmatter.visiting.tastings == true ? <Typography comonent="span" variant="body2">Tastings Available</Typography> : null}
                        </Grid>
                    </Grid>
				</ListItem>
				<Divider variant="inset" component="li" />
			</>
		)
	)
	return distilleriesArray
}
