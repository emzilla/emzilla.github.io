import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import { Container, ContentContainer, ContentPinkAlt, Layout } from '../components/'

const Resume = () => (
  // const siteTitle = get(this, 'props.data.site.siteMetadata.title')
  <Layout>
    <Helmet title={get(this, 'props.data.site.siteMetadata.title')} />
    <Container>
      <ContentPinkAlt>
        <ContentContainer>
          <h1>Resume</h1>
          <section>
            <h2>Experience</h2>
            <div>
              <h3>
                <span>Front-End Developer</span> at InMotionNow
              </h3>
              <span>Feb 2017 - Present</span>
              <p>
                <ul>
                  <li>
                    Helping to create a UI Design System for our software in React and PostCSS.
                  </li>
                  <li>Working on two different workflow software projects in Angular and React.</li>
                </ul>
              </p>
            </div>
            <div>
              <h3>
                <span>Front-End Developer</span> at Atlantic BT
              </h3>
              <span>Feb 2013 - Present</span>
              <p>
                <ul>
                  <li>
                    Working with a team of creatives: UX specialists, designers, and front-end
                    developers, to create client websites.
                  </li>
                  <li>
                    Working with clients, training them and continuing to provide update assistance
                    for their site after deployment.
                  </li>
                  <li>
                    Adding to company development through mentoring, attending meetups and being an
                    active part of the company culture.
                  </li>
                </ul>
              </p>
            </div>
            <div>
              <h3>
                <span>Mentoring</span>
              </h3>
              <span>2015 - Present</span>
              <p>
                <ul>
                  <li>
                    Helping aspiring developers learn to create sites from design to implementation
                    with HTML, CSS, and JavaScript.
                  </li>
                </ul>
              </p>
            </div>
            <div>
              <h3>
                <span>Freelance Development and Design</span>
              </h3>
              <span>2010 - Present</span>
              <p>
                <ul>
                  <li>
                    Advancing my knowledge through designing and building{' '}
                    <a href='http://bittersweetraleigh.com/' target='_blank'>
                      sites
                    </a>{' '}
                    for clients in Wordpress.
                  </li>
                  <li>Branding design and illustration</li>
                </ul>
              </p>
            </div>
            <div>
              <h3>
                <span>Marketing Designer &amp; Front-End Developer</span> at Jerry’s Artarama
                Corporate
              </h3>
              <span>Mar 2011 - Jan 2013</span>
              <p>
                <ul>
                  <li>
                    Designing and developing eye-catching web and email promotions for a national
                    art-supply store.
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
            </div>
            <div>
              <h3>
                <span>Web Designer &amp; Developer</span> at Yay Advertising Co.
              </h3>
              <span>Oct 2010 - Mar 2011</span>
              <p>
                <ul>
                  <li>Creating and managing client websites, promotions, and in-house graphics.</li>
                  <li>Integrating Wordpress into website designs.</li>
                  <li>Helping to build the growing Web design and Graphic design department.</li>
                </ul>
              </p>
            </div>
          </section>

          <section>
            <h2>Education</h2>
            <div>
              <h3>
                <span>North Carolina State University</span> at College of Design
              </h3>
              <span>Graduated 2010</span>
              <p>
                <ul>
                  <li>Majored in Art + Design with a concentration in Animation.</li>
                  <li>Screen printed a LOT of t-shirts.</li>
                </ul>
              </p>
            </div>
          </section>

          <section>
            <h2>Skills</h2>
            <ul>
              <li>HTML</li>
              <li>CSS - Sass, PostCSS</li>
              <li>JavaScript</li>
              <li>Web Animation</li>
              <li>Mobile First Development</li>
              <li>CMS integrations in: Wordpress, Drupal, Magento, Umbraco</li>
            </ul>
          </section>

          <section>
            <h2>Tools</h2>
            <ul>
              <li>
                Git, Gulp, PostCSS, Yarn, Sublime Text, VSCode, Adobe Creative Suite (Photoshop,
                Illustrator, AfterEffects)
              </li>
            </ul>
          </section>

          <section>
            <h2>Interests</h2>
            <ul>
              <li>
                <a href='https://codepen.io/emzilla/pen/WxbyvQ' target='_blank'>
                  SVG animation with CSS and JavaScript
                </a>
              </li>
              <li>
                Animated GIF art (here's my current favorite:{' '}
                <a href='http://carlburton.tumblr.com/' target='_blank'>
                  carlburton.tumblr.com
                </a>)
              </li>
              <li>Mentoring</li>
              <li>Meetups: Girl Develop It, Crop</li>
              <li>Learning more about Angular</li>
              <li>Creating random side-projects</li>
              <li>Podcasts: Stuff You Missed in History Class and Lore are my current favorites</li>
              <li>Finding and drinking all the coffee</li>
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
