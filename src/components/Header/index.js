import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import HelpIcon from '@material-ui/icons/Help'
import Hidden from '@material-ui/core/Hidden'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import NotificationsIcon from '@material-ui/icons/Notifications'
import Toolbar from '@material-ui/core/Toolbar'
import Tooltip from '@material-ui/core/Tooltip'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import Logo from '../../assets/images/logo-main-white.png'

const lightColor = 'rgba(255, 255, 255, 0.7)'

const styles = theme => ({
	secondaryBar: {
		zIndex: 0,
	},
	menuButton: {
		marginLeft: -theme.spacing.unit,
	},
	link: {
		color: lightColor,
		'&:hover': {
			color: theme.palette.common.white,
		},
	},
	button: {
		borderColor: lightColor,
	},
	avatar: {
		img: {
			margin: 0,
		},
	},
})

function Header({ classes, onDrawerToggle, title }) {
	return (
		<>
			<AppBar color="primary" position="sticky" elevation={2}>
				<Toolbar>
					<Grid container spacing={8} alignItems="center">
						<Hidden smUp>
							<Grid item>
								<IconButton
									color="inherit"
									aria-label="Open drawer"
									onClick={onDrawerToggle}
									className={classes.menuButton}
								>
									<MenuIcon />
								</IconButton>
							</Grid>
						</Hidden>
						{/* <Grid item xs /> */}
						{/* <Grid item xs>
							<Typography style={{ textTransform: 'capitalize' }} color="inherit" variant="h4">
								{title}
							</Typography>
						</Grid> */}
						<Grid item align="center" xs >
							<Link to="/">
								<img src={Logo} alt="Spirits Ledger Logo" style={{height: "100px"}} />
							</Link>
						</Grid>
					</Grid>
				</Toolbar>
			</AppBar>
		</>
	)
}

Header.propTypes = {
	classes: PropTypes.object.isRequired,
	onDrawerToggle: PropTypes.func.isRequired,
	title: PropTypes.string.isRequired,
}

export default withStyles(styles)(Header)
