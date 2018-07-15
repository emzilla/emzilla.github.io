

import profilePic from './profile-pic.jpg'

const Bio = () => (
  <p>
    <img src={profilePic} alt='Kyle Mathews' />
      Written by <strong>Kyle Mathews</strong> who lives and works in San Francisco building useful
      things. <a href='https://twitter.com/kylemathews'>You should follow him on Twitter</a>
  </p>
)

export default Bio
