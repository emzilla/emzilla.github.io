import Content from './content'
import styled from 'styled-components'
import theme from '../theme'

const ContentPinkAlt = Content.extend`
  &:before {
    background: ${theme.reverseGradient};
    content: '';
    display: block;
    height: 8rem;
    position: absolute;
    opacity: 0;
    top: -2rem;
    transition: opacity 0.3s ease-in;
    right: -2rem;
    width: 0rem;
    z-index: -3;

    @media (min-width: 60rem) {
      opacity: 1;
      width: 8rem;
    }
  }

  &:after {
    background: ${theme.accentGradientTransparent};
    bottom: 0;
    content: '';
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    z-index: -1;
  }

  @media (min-width: 60rem) {
    max-width: 65vw;
  }

  &:nth-of-type(2n) {
    &:before {
      left: -2rem;
    }

    &:after {
      top: -2%;
      left: 4%;
    }
  }
`

export default ContentPinkAlt
