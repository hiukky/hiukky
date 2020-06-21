import styled from 'styled-components'
import { Container } from '@minily/components'
import { Utils, Flex } from '@minily/tools'

const Wrapper = styled(Container)`
  ${Flex.container('center', 'center', { direction: 'column' })};

  @media only screen and (min-width: 576px) {
    ${Flex.container('space-between', 'center', { direction: 'row-reverse' })};
  }
`

const Item = styled.div`
  margin: 10px 0;
  height: 100%;
  display: flex;
  ${Flex.container('center', 'center')};
`

export { Wrapper, Item }
