import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import { Container, ContentContainer, ContentPinkAlt, LayoutFlex } from '../components/'

const Contact = () => (
  // const siteTitle = get(this, 'props.data.site.siteMetadata.title')
  <LayoutFlex role='main'>
    <Helmet title={get(this, 'props.data.site.siteMetadata.title')} />
    <Container>
      <ContentPinkAlt>
        <ContentContainer>
          <h1>Contact Me</h1>
          <p>
            I am available by email at <a href='mailto:emdavids@gmail.com'>emdavids@gmail.com</a>
          </p>
          <p>
            <a href='https://codepen.io/emzilla/' target='blank'>
              Codepen
            </a>
          </p>
          <p>
            <a href='https://github.com/emzilla' target='blank'>
              Github
            </a>
          </p>
          <p>
            <a href='https://dribbble.com/emzilla' target='blank'>
              Dribbble
            </a>
          </p>
          <p>
            <a href='https://emilymdavidson.tumblr.com/' target='blank'>
              Tumblr
            </a>
          </p>
          <p>
            <a href='https://twitter.com/emzillatron' target='blank'>
              Twitter
            </a>
          </p>
          <p>
            <a href='https://www.linkedin.com/in/emilymdavidson/' target='blank'>
              LinkedIn
            </a>
          </p>
        </ContentContainer>
      </ContentPinkAlt>
    </Container>
  </LayoutFlex>
)

export default Contact

export const pageQuery = graphql`
  query ContactPageQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          frontmatter {
            path
            date(formatString: "DD MMMM, YYYY")
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
