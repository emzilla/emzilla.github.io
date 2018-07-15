import Button from './button'
import styled from 'styled-components'
import theme from '../theme'

const ButtonRight = Button.extend`
  border-image: ${theme.reverseGradientBorder};
  border-image-slice: 1;
  position: absolute;
  right: 0;
`

export default ButtonRight
