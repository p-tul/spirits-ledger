import React from 'react'
import PropTypes from 'prop-types'
import Layout from 'components/Layout'
import EventsContent from 'components/EventsContent'

function EventsPage({ location }) {
	const pageTitle = location ? location.pathname.replace(/\//g, '') : ''
	return (
		<Layout location={location} title={pageTitle}>
			<EventsContent />
		</Layout>
	)
}
EventsPage.propTypes = {
	location: PropTypes.object,
}
export default EventsPage
