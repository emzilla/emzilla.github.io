import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import { Logo, Menu } from '../components/'

class AppLayout extends React.Component {
  render () {
    const { location, children } = this.props
    let header
    return (
      <div>
        <Helmet link={[{ rel: 'shortcut icon', type: 'image/png', href: '../../favicon.ico' }]} />
        {header}
        <Logo>
          <Link to='/'>const home = &#40;&#41; => emzil.la</Link>
        </Logo>
        <Menu
          links={[
            { path: '/about', name: 'about' },
            { path: '/posts', name: 'posts' },
            { path: '/resume', name: 'resume' },
            { path: '/contact', name: 'contact' },
          ]}
        />
        {children()}
      </div>
    )
  }
}

AppLayout.propTypes = {
  children: React.PropTypes.func,
  location: React.PropTypes.object,
  route: React.PropTypes.object,
}

export default AppLayout
