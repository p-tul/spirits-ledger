import React from 'react'
import PropTypes from 'prop-types'
import Layout from 'components/Layout'
import ProducersContent from 'components/ProducersContent'

function ProducersPage({ location }) {
	const pageTitle = location ? location.pathname.replace(/\//g, '') : ''
	return (
		<Layout location={location} title={pageTitle}>
			<ProducersContent />
		</Layout>
	)
}
ProducersPage.propTypes = {
	location: PropTypes.object,
}
export default ProducersPage
