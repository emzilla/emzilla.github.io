import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import { Container, ContentContainer, ContentPinkAlt, LayoutFlex } from '../components/'

const About = () => (
  // const siteTitle = get(this, 'props.data.site.siteMetadata.title')
  <LayoutFlex>
    <Helmet title={get(this, 'props.data.site.siteMetadata.title')} />
    <Container>
      <ContentPinkAlt>
        <ContentContainer>
          <h1>About Me</h1>
          <p>
            I am a Raleigh, NC native who loves pizza, cats, and podcasts in no particular order. I
            have a cat named Tater Tot who loves belly rubs, sleeping on my laptop, and pompom toys.
          </p>
          <p>
            In the summer 2010 I needed a portfolio website to showcase my senior show collection at
            at NC State University’s College of Design. Making the site was so fun that I decided to
            turn that into a career.
          </p>
          <p>
            Even though I made front end development my full-time job, I have a bunch of
            side-projects and hobbies to keep me busy. I still absolutely love graphic design (and
            Adobe Illustrator) and I do a ton of illustration work. My favorite hobby has always
            been painting.
          </p>
          <p>
            My development work is on{' '}
            <a href='https://codepen.io/emzilla/' target='blank'>
              Codepen
            </a>,{' '}
            <a href='https://github.com/emzilla' target='blank'>
              Github
            </a>.
          </p>
          <p>
            See my design work on{' '}
            <a href='https://dribbble.com/emzilla' target='blank'>
              Dribbble
            </a>{' '}
            and{' '}
            <a href='http://emilymdavidson.tumblr.com/' target='blank'>
              Tumblr
            </a>.
          </p>
          <p>
            Follow me{' '}
            <a href='https://twitter.com/emzillatron' target='blank'>
              Twitter
            </a>. GIFs guaranteed.
          </p>
        </ContentContainer>
      </ContentPinkAlt>
    </Container>
  </LayoutFlex>
)

export default About

export const pageQuery = graphql`
  query AboutPageQuery {
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
