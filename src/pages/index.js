import React from 'react'
import { graphql } from 'gatsby'
import Layout from 'components/Layout'
import PropTypes from 'prop-types'
import HomeContent from '../components/HomeContent'

import Img from '../assets/images/field.jpg'
import Logo from '../assets/images/logo-main-white.png'

function DashboardIndex({ data, location }) {
	const { title } = data.site.siteMetadata
	return (
		<Layout location={location} title={title}>
			<div style={{
				background: `url(${Img}) bottom center no-repeat/cover`,
				display: 'flex',
				minHeight: '500px',
				alignItems: 'center',
				justifyContent: 'center'
			}}>
					{/* <img src={Logo} style={{
						maxWidth: '100%',
						height: 'auto'
					}} /> */}
			</div>
			<HomeContent />
		</Layout>
	)
}
DashboardIndex.propTypes = {
	data: PropTypes.object.isRequired,
	location: PropTypes.object,
}
export const pageQuery = graphql`
	query {
		site {
			siteMetadata {
				title
			}
		}
	}
`
export default DashboardIndex
