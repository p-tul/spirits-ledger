import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Paper from '@material-ui/core/Paper'


export default ({ data }) => {
  
	return (
    <Layout>
      <div>
        <h1>Happy Birthday</h1>
        <div>Hey</div>
      </div>
    </Layout>
	)
}

export const distilleryQuery = graphql`
	query($path: String!) {
		markdownRemark(frontmatter: { path: { eq: $path } }) {
			frontmatter {
				name
			}
		}
	}
`