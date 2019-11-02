import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Tooltip from '@material-ui/core/Tooltip'
import IconButton from '@material-ui/core/IconButton'
import { withStyles } from '@material-ui/core/styles'
import SearchIcon from '@material-ui/icons/Search'
import RefreshIcon from '@material-ui/icons/Refresh'
import TabBar from 'components/TabBar'

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
function ContactContent({ classes }) {
	return (
		<>
			<div className={classes.container}>
				<Paper className={classes.paper}>
					<div className={classes.contentWrapper}>
						<Typography variant="h1" align="center">
							Contact
						</Typography>
						<Typography color="textSecondary" align="center">
							No users for this project yet
						</Typography>
					</div>
				</Paper>
			</div>
		</>
	)
}

ContactContent.propTypes = {
	classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(ContactContent)
