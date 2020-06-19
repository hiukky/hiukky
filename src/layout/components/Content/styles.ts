import styled from 'styled-components'
import { Container } from '@minily/components'
import { Flex } from '@minily/tools'

const Wrapper = styled(Container)`
  position: relative;
  width: 100%;
  height: calc(100vh - 104px);
  grid-area: 'content';
  overflow: auto;

  ${Flex.container('space-evenly', 'initial', { direction: 'column' })}

  @media only screen and (min-width: 576px) {
    width: calc(100% - 80px);
    padding: 20px;
    margin-left: 80px;
  }
`

export { Wrapper }
