import React from 'react'
import PropTypes from 'prop-types'
import Layout from 'components/Layout'
import DistilleriesContent from 'components/DistilleriesContent'

function DistilleriesPage({ location }) {
	const pageTitle = location ? location.pathname.replace(/\//g, '') : ''
	return (
		<Layout location={location} title={pageTitle}>
			<DistilleriesContent />
		</Layout>
	)
}
DistilleriesPage.propTypes = {
	location: PropTypes.object,
}
export default DistilleriesPage
