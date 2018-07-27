import React from 'react'
import Link from 'gatsby-link'
import { Logo, Menu } from '../components/'

class AppLayout extends React.Component {
  render () {
    const { location, children } = this.props
    let header
    return (
      <div>
        {header}
        <Logo>
          <Link to='/'>const home = &#40;link&#41; => emzil.la</Link>
        </Logo>
        <Menu
          links={[
            { path: '/about', name: 'about' },
            { path: '/posts', name: 'posts' },
            { path: '/resume', name: 'resume' },
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
