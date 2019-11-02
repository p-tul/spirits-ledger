import React from "react"
import { graphql } from "gatsby"

import Layout from '../components/Layout'
import Paper from '@material-ui/core/Paper'

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <Paper>
            <h1>{frontmatter.name}</h1>
            <div dangerouslySetInnerHTML={{ __html: html }} />
      </Paper>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
          name
          
      }
    }
  }
`