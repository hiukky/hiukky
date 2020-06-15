import styled from 'styled-components'
import { Container } from '@minily/components'

const Wrapper = styled(Container)`
  position: relative;
  width: 100%;
  height: 100vh;
  grid-area: 'content';
  overflow: auto;

  @media only screen and (min-width: 568px) {
    width: calc(100% - 80px);
    margin-left: 80px;
  }
`

export { Wrapper }
