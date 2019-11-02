import React from 'react'
import PropTypes from 'prop-types'
import Layout from 'components/Layout'
import NewsContent from 'components/NewsContent'

function NewsPage({ location }) {
	const pageTitle = location ? location.pathname.replace(/\//g, '') : ''
	return (
		<Layout location={location} title={pageTitle}>
			<NewsContent />
		</Layout>
	)
}
NewsPage.propTypes = {
	location: PropTypes.object,
}
export default NewsPage
