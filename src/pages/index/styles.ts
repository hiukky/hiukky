import styled from 'styled-components'
import { Row, Col } from '@minily/components'
import { Flex } from '@minily/tools'

const Wrapper = styled(Row)`
  height: 100%;
  ${Flex.container('center', 'center', { wrap: 'wrap' })}
`

const Child = styled(Col)`
  ${Flex.container('flex-start', 'center', { direction: 'column' })}
`

const Brand = styled.img`
  max-width: 25rem;
  max-height: 25rem;
`

export { Wrapper, Child, Brand }
