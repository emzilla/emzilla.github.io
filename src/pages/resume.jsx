import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import { Container, ContentContainer, ContentPinkAlt, Layout } from '../components/'

const Resume = () => (
  // const siteTitle = get(this, 'props.data.site.siteMetadata.title')
  <Layout role='main'>
    <Helmet title={get(this, 'props.data.site.siteMetadata.title')} />
    <Container>
      <ContentPinkAlt>
        <ContentContainer>
          <h1>Resume</h1>
          <section>
            <h2>Experience</h2>

            <small>Feb 2017 - Present</small>
            <h3>Front-End Developer | InMotionNow</h3>
            <p>
              <ul>
                <li>Working on React and Angular JavaScript frameworks on enterprise software.</li>
                <li>
                  Creating the building blocks for a user interface library through a design system
                  of JavaScript and CSS based components.
                </li>
                <li>
                  Maintaining component libraries for developers to utilize as well as managing
                  project organization, collaboration and architecture.
                </li>
              </ul>
            </p>

            <small>2015 - Present</small>
            <h3>Mentoring</h3>
            <p>
              <ul>
                <li>
                  Encouraging beginning developers through helping with resources for development
                  learning and being a resource for career advice.
                </li>
              </ul>
            </p>

            <small>2010 - Present</small>
            <h3>Freelance Development and Design</h3>
            <p>
              <ul>
                <li>
                  Furthering my knowledge and flexing my creative muscles with Wordpress and static
                  site design development.
                </li>
                <li>Branding and marketing illustration design for small businesses in Raleigh.</li>
              </ul>
            </p>

            <small>2013 - 2017</small>
            <h3>Front End Developer | AtlanticBT</h3>
            <p>
              <ul>
                <li>
                  Working on a creative team of UX researchers, designers, front-end and back-end
                  developers to create client websites.
                </li>
                <li>
                  Working with clients, training them and continuing to provide update assistance
                  for their site after deployment.
                </li>
                <li>
                  Adding to company culture through mentoring, attending meetups and event planning.
                </li>
              </ul>
            </p>

            <small>2011 - 2013</small>
            <h3>Marketing Designer and Developer | Jerry’s Artarama Corporate</h3>
            <p>
              <ul>
                <li>
                  Designing and developing eye-catching web and email promotions for a national
                  art-supply store
                </li>
                <li>
                  Managing and maintaining email marketing program and implementing advertising
                  strategies.
                </li>
                <li>
                  Regularly updating video art lesson program and other integral parts of the
                  website.
                </li>
              </ul>
            </p>

            <small>2010 - 2011</small>
            <h3>Web Designer &amp; Developer | Yay Advertising Co.</h3>
            <p>
              <ul>
                <li>Creating and managing client websites, promotions, and in-house graphics.</li>
                <li>Integrating Wordpress into website designs.</li>
                <li>Helping to build the growing web and graphic design departments</li>
              </ul>
            </p>
          </section>

          <section>
            <h2>Education</h2>
            <div>
              <h3>North Carolina State University | College of Design</h3>
              <span>Graduated 2010</span>
              <p>Bachelor of Art + Design: Concentration in Animation</p>
            </div>
          </section>

          <section>
            <h2>What I'm Best At</h2>
            <ul>
              <li>Problem Solving</li>
              <li>Design systems thinking</li>
              <li>Modular design</li>
              <li>Detailed interaction animations</li>
              <li>Committing to writing the best, user-accessible code</li>
              <li>Flexible, iterative process with lots of experimentation</li>
              <li>Not being afraid to fail</li>
            </ul>
          </section>

          <section>
            <h2>Skills</h2>
            <ul>
              <li>JavaScript</li>
              <li>Accessible, semantic HTML</li>
              <li>CSS and CSS Architecture</li>
              <li>DevOps work on Front-end projects</li>
              <li>Javascript framework development (React, Angular)</li>
              <li>Committed lifelong learner</li>
              <li>Mentoring</li>
            </ul>
          </section>

          <section>
            <h2>Interests</h2>
            <ul>
              <li>Podcasts</li>
              <li>Art</li>
              <li>Coffee</li>
              <li>Cats</li>
              <li>Finding the best reaction gifs</li>
            </ul>
          </section>

          <section>
            <h2>Contact</h2>
            <ul>
              <li>
                <a href='mailto:emdavids@gmail.com'>email</a>
              </li>
              <li>
                <a href='https://github.com/emzilla'>github</a>
              </li>
              <li>
                <a href='https://codepen.io/emzilla'>codepen</a>
              </li>
              <li>
                <a href='https://dribbble.com/emzilla'>dribbble</a>
              </li>
            </ul>
          </section>
        </ContentContainer>
      </ContentPinkAlt>
    </Container>
  </Layout>
)

export default Resume

export const pageQuery = graphql`
  query ResumePageQuery {
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
