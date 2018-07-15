import Layout from './layout'
import styled from 'styled-components'

const LayoutFlex = Layout.extend`
  @media (min-width: 30rem) {
    align-items: center;
    display: flex;
    justify-content: center;
  }
`

export default LayoutFlex
