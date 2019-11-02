import React from 'react'
import PropTypes from 'prop-types'
import Layout from 'components/Layout'
import AboutContent from 'components/AboutContent'

function AboutPage({ location }) {
	const pageTitle = location ? location.pathname.replace(/\//g, '') : ''
	return (
		<Layout location={location} title={pageTitle}>
			<AboutContent />
		</Layout>
	)
}
AboutPage.propTypes = {
	location: PropTypes.object,
}
export default AboutPage
