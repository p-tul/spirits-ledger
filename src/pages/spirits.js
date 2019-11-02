import React from 'react'
import PropTypes from 'prop-types'
import Layout from 'components/Layout'
import SpiritsContent from 'components/SpiritsContent'

function SpiritsPage({ location }) {
	const pageTitle = location ? location.pathname.replace(/\//g, '') : ''
	return (
		<Layout location={location} title={pageTitle}>
			<SpiritsContent />
		</Layout>
	)
}
SpiritsPage.propTypes = {
	location: PropTypes.object,
}
export default SpiritsPage
