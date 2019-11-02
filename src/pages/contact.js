import React from 'react'
import PropTypes from 'prop-types'
import Layout from 'components/Layout'
import ContactContent from 'components/ContactContent'

function ContactPage({ location }) {
	const pageTitle = location ? location.pathname.replace(/\//g, '') : ''
	return (
		<Layout location={location} title={pageTitle}>
			<ContactContent />
		</Layout>
	)
}
ContactPage.propTypes = {
	location: PropTypes.object,
}
export default ContactPage
