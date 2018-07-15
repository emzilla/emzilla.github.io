import styled from 'styled-components'

const HeroContainer = styled.section`
  position: relative;
  margin: 0 auto;
  max-width: 70vw;

  &:not(:last-child) {
    padding-bottom: 5rem;
  }
`

export default HeroContainer
