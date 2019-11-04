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
		display: 'flex',
		flexWrap: 'wrap-reverse'
	},
	container: {
		padding: '48px 36px 0',
	},
	textField: {
		width: "100%",
	},
	contactForm: {
		flexGrow: '1',
		display: 'flex',
		flexDirection: 'column',
		minWidth: '300px'
	},
	button: {
		margin: '1rem 0'
	},
	typoWrapper: {
		flexGrow: '1',
		padding: '0 2rem'
	}
})
function ContactContent({ classes }) {
	return (
		<>
			<div className={classes.container}>
				<Paper className={classes.paper}>
					<div className={classes.contentWrapper}>
						<form
							className={classes.contactForm}
							data-netlify="true"
							data-netlify-recaptcha="true"
							method="POST"
							name="contactForm"
						>
							<TextField
								required
								label="Name"
								name="name"
								className={classes.textField}
								id="name"
								margin="normal"
								variant="outlined"
							/>
							<TextField
								required
								label="Email"
								name="email"
								className={classes.textField}
								type="email"
								id="email"
								margin="normal"
								variant="outlined"
							/>
							<TextField
								label="Message"
								id="message"
								name="message"
								multiline
								rows="6"
								className={classes.textField}
								margin="normal"
								variant="outlined"
							/>
							<div data-netlify-recaptcha="true"></div>
							<Button
								variant="contained"
								color="primary"
								className={classes.button}
								margin="normal"
								type="submit"
							>
								Submit
							</Button>
						</form>
						<div className={classes.typoWrapper}>
							<Typography variant="h1" align="center" gutterBottom>
								Contact
							</Typography>
							<Typography variant="body1" align="center" gutterBottom>
								kdwchk afhcak jfch aekjch akjch kah 
							</Typography>
							<Typography variant="body1" align="center" gutterBottom>
								kdwchk afhcak jfch aekjch akjch kah 
							</Typography>
						</div>
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
