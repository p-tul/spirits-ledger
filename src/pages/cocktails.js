import React from 'react'
import PropTypes from 'prop-types'
import Layout from 'components/Layout'
import CocktailsContent from 'components/CocktailsContent'

function CocktailsPage({ location }) {
	const pageTitle = location ? location.pathname.replace(/\//g, '') : ''
	return (
		<Layout location={location} title={pageTitle}>
			<CocktailsContent />
		</Layout>
	)
}
CocktailsPage.propTypes = {
	location: PropTypes.object,
}
export default CocktailsPage
